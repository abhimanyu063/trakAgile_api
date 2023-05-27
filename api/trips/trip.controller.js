const tripService = require('./trip.service');

module.exports = {
    addTrip: (req, res, next) => {
        try {
            const body = req.body;
            tripService.addTrip(body, (err, results) => {
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
    getTripsByUserId: (req, res, next) => {
        try {
            tripService.getTripsByUserId(req.params.userId, (err, results) => {
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
    },
    updateTrip: (req, res, next) => {
        try {
            const body = req.body;
            tripService.updateTrip(body, (err, results) => {
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
}