const userService = require("./user.service");

module.exports = {
    addUser: (req, res) => {
        try {
            const body = req.body;
            userService.addUser(body, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: err
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
            userService.getUserById(req.params.userId, (err, results) => {
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
    },
    validateAndGetUser: (req, res) => {
        try {
            const body = req.body;
            userService.validateAndGetUser(body, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: err
                    });
                }
                else {
                    return res.status(200).json({
                        success: results === undefined ? 0 : 1,
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
}