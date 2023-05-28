const siteWorkService = require('./sitework.service');
const { randomNumber, createNestedDirectory } = require('../../helper/common');
const multer = require('multer');

let fileName = '';
const fileLocation = 'uploads/sitework';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, fileLocation)//path to upload file
    },
    filename: (req, file, cb) => {
        const date = new Date();
        const uniqueId = date.valueOf() + randomNumber();
        const arr = file.originalname.split('.');
        const ext = arr[arr.length - 1];
        fileName = (file.originalname !== undefined && file.originalname !== null) ? `${uniqueId}.${ext}` : '';
        cb(null, fileName)// can modilfy file name here
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        //cb(null, false);
        return cb(new Error(`file format not allowed - file name : ${file.originalname}`));
    }
};

const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 5
    // },
    fileFilter: fileFilter
}).single('docPath');

module.exports = {
    addSiteWork: async (req, res, next) => {
        try {
            await createNestedDirectory(fileLocation);
            upload(req, res, function (err) {
                if (err instanceof multer.MulterError) {
                    return next(err);
                } else if (err) {
                    return next(err);
                }
                const body = req.body;
                body.docPath = fileName == '' ? '' : `${fileLocation}/${fileName}`;
                if (body.siteId == '') {
                    const error = new Error('siteId is blank');
                    return next(error);
                }
                siteWorkService.addSiteWork(body, (err, results) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(200).json({
                        success: 1,
                        data: results
                    });
                });

            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getSiteWorkBySiteId: (req, res, next) => {
        try {
            siteWorkService.getSiteWorkBySiteId(req.params.siteId, (err, results) => {
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
    reportIssue: (req, res, next) => {
        try {
            const body = req.body;
            if (body.siteId == '') {
                const error = new Error('siteId is blank');
                return next(error);
            }
            siteWorkService.reportIssue(body, (err, results) => {
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
}