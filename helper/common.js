const fs = require('fs');

const randomNumber = (min = 1, max = 100000000000000000) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

const convertImageToByteArray = (filePath) => {
    try {
        const fileData = fs.readFileSync(filePath).toString('hex');
        let result = [];
        for (var i = 0; i < fileData.length; i += 2) {
            result.push('0x' + fileData[i] + '' + fileData[i + 1]);
        }
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = { randomNumber, convertImageToByteArray };