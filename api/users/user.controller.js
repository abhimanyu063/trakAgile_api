const { addUserService, getUserByIdService } = require("./user.service");

module.exports = {
    addUser: (req, res) => {
        try {
            const body = req.body;

            addUserService(body, (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
                    });
                }
                else {
                    return res.status(200).json({
                        success: 1,
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getUserById: (req, res) => {
        try {
            getUserByIdService(req.params.userId, (err, results) => {
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