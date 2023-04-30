const { addSiteService, getSitesByUserIdService } = require("./site.service");

module.exports = {
    addSite: (req, res) => {
        try {
            const body = req.body;
            addSiteService(body, (err, results) => {
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
            getSitesByUserIdService(req.params.userId, (err, results) => {
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