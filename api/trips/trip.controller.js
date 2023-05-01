const tripService = require('./trip.service');

module.exports = {
    addTrip: (req, res) => {
        try {
            const body = req.body;
            tripService.addTrip(body, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: err
                    });
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
    getTripsByUserId: (req, res) => {
        try {
            tripService.getTripsByUserId(req.params.userId, (err, results) => {
                if (err) {
                    return;
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
    updateTrip: (req, res) => {
        try {
            const body = req.body;
            tripService.updateTrip(body, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: err
                    });
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