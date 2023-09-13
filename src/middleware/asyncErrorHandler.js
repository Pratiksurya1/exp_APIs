const customError = require('./custom_error');

module.exports = (handler) => {
    return (req, res, next) => {
        handler(req, res, next).catch(err => customError(err, req, res, next));
    }
}