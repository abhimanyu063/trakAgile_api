const dashboardService = require('./dashboard.service');

module.exports = {
    getDashboardDetails: (req, res) => {
        try {
            dashboardService.getDashboardDetails((err, results) => {
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