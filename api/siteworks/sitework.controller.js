const siteWorkService = require("./sitework.service");

module.exports = {
    addSiteWork: (req, res) => {
        try {
            const body = req.body;
            siteWorkService.addSiteWork(body, (err, results) => {
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
    getSiteWorkBySiteId: (req, res) => {
        try {
            siteWorkService.getSiteWorkBySiteId(req.params.siteId, (err, results) => {
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