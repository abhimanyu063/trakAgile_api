const siteTypeService = require('./sitetype.service');

module.exports = {
    addSiteType: (req, res) => {
        try {
            const body = req.body;
            siteTypeService.addSiteType(body, (err, results) => {
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
    getSiteTypes: (req, res) => {
        try {
            siteTypeService.getSiteTypes((err, results) => {
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