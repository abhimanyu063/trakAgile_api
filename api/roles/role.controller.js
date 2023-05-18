const roleService = require('./role.service');

module.exports = {
    getRoles: (req, res) => {
        try {
            roleService.getRoles((err, results) => {
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
}