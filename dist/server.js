"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var bodyParser = require("body-parser");
var swagger_config_1 = require("./swagger-config");
var google_trends_routes_1 = __importDefault(require("./routes/google-trends-routes"));
var auth_routes_1 = __importDefault(require("./routes/auth-routes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "content-type, Authorization");
    next();
});
var mongodbUri = process.env.MONGODB_URI;
if (mongodbUri) {
    mongoose_1.default
        .connect(mongodbUri, {})
        .then(function () {
        console.log("Connected to MongoDB");
    })
        .catch(function (error) {
        console.error(error);
    });
}
else {
    console.error("MONGODB_URI environment variable not defined");
}
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.swaggerDocs));
app.use("/api", google_trends_routes_1.default);
app.use("/auth", auth_routes_1.default);
app.get("/", function (req, res) {
    res.send("Trend Vortex API");
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running");
});
