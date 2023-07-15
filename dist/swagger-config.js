"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = exports.swaggerOptions = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
                //url: process.env.BASE_URL || "http://localhost:3000",
            },
        ],
        components: {
            securitySchemes: {
                Bearer: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./dist/routes/*.js"],
};
exports.swaggerOptions = swaggerOptions;
var swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerDocs = swaggerDocs;
