const siteTypeService = require('./sitetype.service');

module.exports = {
    addSiteType: (req, res, next) => {
        try {
            const body = req.body;
            siteTypeService.addSiteType(body, (err, results) => {
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
    getSiteTypes: (req, res, next) => {
        try {
            siteTypeService.getSiteTypes((err, results) => {
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
    }
}