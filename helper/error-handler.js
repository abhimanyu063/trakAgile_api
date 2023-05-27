const errorHandler = (err, req, res, next) => {
    console.log(req.path)
    console.log(err.message)
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 0
    res.status(err.statusCode).json({
        status: 0,
        message: 'Error occured. Please contact administrator.'
    });
}

module.exports = errorHandler;