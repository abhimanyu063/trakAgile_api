const { addDistrictService, getDistrictByIdService } = require("./district.service");

module.exports = {

    addDistrict: (req, res) => {
        try {
            const body = req.body;

            addDistrictService(body, (err, results) => {
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

    getDistrictById: (req, res) => {
        try {
            const districtID = req.districtID;
            console.log(districtID)

            getDistrictByIdService(districtID, (err, results) => {
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