const { addTripService, getTripByIdService } = require("./trip.service");

module.exports = {

    addTrip: (req, res) => {
        try {
            const body = req.body;

            addTripService(body, (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
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

    getTripById: (req, res) => {
        try {
            const mobile = 123;

            getTripByIdService(mobile, (err, results) => {
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