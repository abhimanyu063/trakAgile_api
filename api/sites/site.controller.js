const siteService = require('./site.service');

module.exports = {
    addSite: (req, res) => {
        try {
            const body = req.body;
            siteService.addSite(body, (err, results) => {
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
    getSitesByUserId: (req, res) => {
        try {
            siteService.getSitesByUserId(req.params.userId, (err, results) => {
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
    getSites: (req, res) => {
        try {
            siteService.getSites(req.params.startDate, req.params.endDate, (err, results) => {
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