const randomNumber = (min = 1, max = 100000000000000000) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

const convertDataURIToBinary = (dataURI) => {
    try {
        console.log('dataURI : ' + dataURI)
        var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
        console.log("base64Index : " + base64Index)
        var base64 = dataURI.substring(base64Index);
        console.log('base64 : ' + base64)
        var raw = window.atob(base64);
        console.log(raw)
        var rawLength = raw.length;
        console.log('rawlength : ' + rawLength)
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for (i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }
    catch (err) {
        throw err;
    }
}

const convertImageToByteArray = (path) => {
    try {
        const reader = new FileReader();
        let byteArray;
        console.log('test')
        reader.addEventListener("loadend", function () {
            // convert image file to base64 string
            console.log('base64', reader.result);
            byteArray = convertDataURIToBinary(reader.result);
            console.log('byte array', byteArray);
        }, false);

        reader.readAsDataURL(`../${path}`);
    }
    catch (err) {
        throw err;
    }
}

module.exports = { randomNumber, convertImageToByteArray };