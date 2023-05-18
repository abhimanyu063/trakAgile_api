const siteWorkService = require('./sitework.service');
const multer = require('multer');

let fileName = '';
const fileLocation = 'uploads/sitework';

const randomNumber = (min = 1, max = 100000000000000000) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

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
        return cb(new Error('file format not allowed'));
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
    addSiteWork: (req, res) => {
        try {
            upload(req, res, function (err) {
                if (err instanceof multer.MulterError) {
                    res.send(err.message);
                } else if (err) {
                    res.send(err.message);
                }
                else {
                    const body = req.body;
                    body.docPath = `${fileLocation}/${fileName}`;

                    siteWorkService.addSiteWork(body, (err, results) => {
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
            });

        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getSiteWorkBySiteId: (req, res) => {
        try {
            siteWorkService.getSiteWorkBySiteId(req.params.siteId, (err, results) => {
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
    },
    reportIssue: (req, res) => {
        try {
            const body = req.body;
            siteWorkService.reportIssue(body, (err, results) => {
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
}