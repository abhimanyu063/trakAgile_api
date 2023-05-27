const { randomNumber } = require('./common');
const multer = require('multer');

let fileName = '';
let path = '';
let mimetype = [];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path)//path to upload file
    },
    filename: (req, file, cb) => {
        const date = new Date();
        const uniqueId = date.valueOf() + randomNumber();
        const arr = file.originalname.split('.');
        const ext = arr[arr.length - 1];
        fileName = (file.originalname !== undefined && file.originalname !== null) ? `${uniqueId}.${ext}` : '';
        cb(null, fileName)// can modilfy file name here
    }
});

const fileFilter = (req, file, cb) => {
    if (mimetype.length > 0 && mimetype.includes(file.mimetype)) {
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
});//.single('docPath');

upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        throw err;
    } else if (err) {
        throw err;
    }
});

const uploadFile = (fileLocation, fileFormatArr) => {
    path = 'uploads/sitework';
    mimetype = ['image/jpeg', 'image/png'];
    upload();
}

module.exports = uploadFile;