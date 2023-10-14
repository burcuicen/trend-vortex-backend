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
        url:'https://trend-vortex-backend.azurewebsites.net',
      },
      {
        url:'localhost:3000',
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerOptions, swaggerDocs };

