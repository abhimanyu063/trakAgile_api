const workTypeService = require('./worktype.service')

module.exports = {
    addWorkType: (req, res, next) => {
        try {
            const body = req.body;
            workTypeService.addWorkType(body, (err, results) => {
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
    getWorkTypes: (req, res, next) => {
        try {
            workTypeService.getWorkTypes((err, results) => {
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