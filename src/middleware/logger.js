const winston = require('winston');
require('winston-mongodb');

module.exports = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.MongoDB({db: 'mongodb://0.0.0.0:27017/aspTestDB', level: 'error'}),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });