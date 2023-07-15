import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
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
        url: process.env.BASE_URL || "http://localhost:3000",
      },
      //   {
      //     url: process.env.BASE_URL,
      //   },
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerOptions, swaggerDocs };
