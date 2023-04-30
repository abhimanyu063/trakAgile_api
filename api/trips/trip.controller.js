const { addTripService, getTripsByUserIdService } = require("./trip.service");

module.exports = {
    addTrip: (req, res) => {
        try {
            const body = req.body;
            addTripService(body, (err, results) => {
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
            getTripsByUserIdService(req.params.userId, (err, results) => {
                if (err) {
                    console.log(err);
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
    }
}