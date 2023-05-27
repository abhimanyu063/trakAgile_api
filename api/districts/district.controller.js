const districtService = require('./district.service');

module.exports = {
    addDistrict: (req, res, next) => {
        try {
            const body = req.body;
            districtService.addDistrict(body, (err, results) => {
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
    getDistricts: (req, res, next) => {
        try {
            districtService.getDistricts((err, results) => {
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