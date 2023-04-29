const { addSiteTypeService, getSiteTypesService } = require("./sitetype.service");

module.exports = {
    addSiteType: (req, res) => {
        try {
            const body = req.body;

            addSiteTypeService(body, (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
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
            getSiteTypesService((err, results) => {
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