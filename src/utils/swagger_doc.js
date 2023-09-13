// const express = require('express');
// const swaggerDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const version = require('../../package.json');
// const { model, Model } = require('mongoose');

// const options= swaggerJsdoc.Options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "REST API Docs",
//         version,
//       },
//       components: {
//         securitySchemes: {
//           bearerAuth: {
//             type: "http",
//             scheme: "bearer",
//             bearerFormat: "JWT",
//           },
//         },
//       },
//       security: [
//         {
//           bearerAuth: [],
//         },
//       ],
//     },
//     apis: ["../routes/user_route*.js"],
//   };

//   const swaggerSpec = swaggerJsdoc(options);

//   function swaggerDocFun(app, port) {
//     // Swagger page
//     app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
//     // Docs in JSON format
//     app.get("/docs.json", (req, res) => {
//       res.setHeader("Content-Type", "application/json");
//       res.send(swaggerSpec);
//     });
  
//     log.info(`Docs available at http://localhost:${port}/docs`);
//   }
  
  
// module.exports= swaggerDocFun;