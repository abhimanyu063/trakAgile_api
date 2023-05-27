const pool = require('../config/database');

const logError = (path, message) => {
    try {
        pool.query(`insert into tblError (path, message, createdOn) values (?,?,?)`,
            [
                path,
                message,
                new Date(),
            ]);
    }
    catch (error) {
        console.log('Error ', error)
    }
}

const errorHandler = (err, req, res, next) => {
    logError(req.path, err.message);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 0
    res.status(err.statusCode).json({
        status: 0,
        message: 'Error occured. Please contact administrator.'
    });
}

module.exports = errorHandler;