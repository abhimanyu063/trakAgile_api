const userService = require('./forgetpassword.service');


module.exports = {
    validateForgetPassword: (req, res) => {
        try {
            const body = req.body;
            userService.validateForgetPassword(body, (err, results) => {
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