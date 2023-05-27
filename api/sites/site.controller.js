const siteService = require('./site.service');
const { convertImageToByteArray } = require('../../helper/common');

module.exports = {
    addSite: (req, res, next) => {
        try {
            const body = req.body;
            siteService.addSite(body, (err, results) => {
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
    getSitesByUserId: (req, res, next) => {
        try {
            siteService.getSitesByUserId(req.params.userId, (err, results) => {
                if (err) {
                    return next(err);
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
    },
    getSites: (req, res, next) => {
        try {
            siteService.getSites(req.params.startDate, req.params.endDate, req.params.status, (err, results) => {
                if (err) {
                    return next(err);
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
    },
    getImage: (req, res, next) => {
        try {
            siteService.getImage(req.params.siteWorkId, (err, results) => {
                if (err) {
                    return next(err);
                }
                let array;
                if (results.docPath != null) {
                    try {
                        array = convertImageToByteArray(results.docPath)
                    }
                    catch (err) {
                        return next(err);
                    }
                }
                return res.json({
                    success: 1,
                    data: array
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
}