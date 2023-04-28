const { addSiteTypeService, getSiteTypeByIdService } = require("./sitetype.router");

module.exports = {

    addSiteType: (req, res) => {
        try {
            const body = req.body;

            addSiteTypeService(body, (err, results) => {
                if (err) {
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

    getSiteTypeById: (req, res) => {
        try {
            const mobile = 123;

            getSiteTypeByIdService(mobile, (err, results) => {
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