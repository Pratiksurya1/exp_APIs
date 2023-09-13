require('express-async-errors')
const logger = require('./src/middleware/logger')
const error = require('./src/middleware/asyncErrorHandler');
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const swaggerDoc = require('./src/utils/swagger_doc');



const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'User API',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/user_route*.js'],
  };

  const openapiSpecification = swaggerJsdoc(options);
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
  


const PORT = process.env.PORT || 3000;
const userRoute = require('./src/routes/user_route');

app.use(express.json());    

mongoose.connect("mongodb://0.0.0.0:27017/aspTestDB").then(()=>logger.info('Connected to mongo...')).catch(err=>logger.error(err.message,err));

app.use('/', userRoute);

app.use(error);

app.listen(PORT, function () {
    logger.info(`server started on port ${PORT}`);    
});