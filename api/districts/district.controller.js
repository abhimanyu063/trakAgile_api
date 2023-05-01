const districtService = require('./district.service');

module.exports = {
    addDistrict: (req, res) => {
        try {
            const body = req.body;
            districtService.addDistrict(body, (err, results) => {
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
    getDistricts: (req, res) => {
        try {
            districtService.getDistricts((err, results) => {
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