"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var google_trends_routes_1 = __importDefault(require("./routes/google-trends-routes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
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
var swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Trend Vortex API",
            version: "1.0.0",
            description: "Trend Vortex API",
            contact: {
                name: "Burcu İçen",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./dist/routes/google-trends-routes.js"],
};
var swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use("/api", google_trends_routes_1.default);
app.get("/", function (req, res) {
    res.send("Trend Vortex API");
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running");
});
