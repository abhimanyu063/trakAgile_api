const roleService = require('./role.service');

module.exports = {
    getRoles: (req, res, next) => {
        try {
            roleService.getRoles((err, results) => {
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