const { addRequestTypeService, getRequestTypesService } = require("./requesttype.service");

module.exports = {
    addRequestType: (req, res) => {
        try {
            const body = req.body;
            addRequestTypeService(body, (err, results) => {
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
    getRequestTypes: (req, res) => {
        try {
            getRequestTypesService((err, results) => {
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