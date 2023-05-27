const requestService = require('./request.service');

module.exports = {
    addRequest: (req, res, next) => {
        try {
            const body = req.body;
            requestService.addRequest(body, (err, results) => {
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
    getRequestsByUserId: (req, res, next) => {
        try {
            requestService.getRequestsByUserId(req.params.userId, (err, results) => {
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
    getRequests: (req, res, next) => {
        try {
            requestService.getRequests(req.params.startDate, req.params.endDate, (err, results) => {
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
    }
}