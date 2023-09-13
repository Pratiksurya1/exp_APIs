const logger = require('./logger');

module.exports = (err, req, res, next) => {
    logger.error(err.message, err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    });
}