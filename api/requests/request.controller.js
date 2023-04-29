const { addRequestService, getRequestsByUserIdService } = require("./request.service");

module.exports = {
    addRequest: (req, res) => {
        try {
            const body = req.body;
            addRequestService(body, (err, results) => {
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
    getRequestsByUserId: (req, res) => {
        try {
            getRequestsByUserIdService(req.params.userId, (err, results) => {
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
    }
}