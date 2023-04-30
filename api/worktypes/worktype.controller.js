const workTypeService = require("./worktype.service")

module.exports = {
    addWorkType: (req, res) => {
        try {
            const body = req.body;
            workTypeService.addWorkType(body, (err, results) => {
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
    getWorkTypes: (req, res) => {
        try {
            workTypeService.getWorkTypes((err, results) => {
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