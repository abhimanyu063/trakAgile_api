const requestTypeService = require('./requesttype.service');

module.exports = {
    addRequestType: (req, res, next) => {
        try {
            const body = req.body;
            requestTypeService.addRequestType(body, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getRequestTypes: (req, res, next) => {
        try {
            requestTypeService.getRequestTypes((err, results) => {
                if (err) {
                    return next(err);
                }
                return res.json({
                    success: 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    }
}