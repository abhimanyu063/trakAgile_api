const pool = require('../../config/database');

module.exports = {
    addDistrict: (data, callback) => {
        try {
            pool.query(`insert into tblDistrict (districtName) values (?,?)`,
                [
                    data.districtName,
                    1,
                ],
                (error, results, fields) => {
                    if (error) {
                        callback(error);
                    }
                    return callback(null, results);
                });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getDistricts: (callback) => {
        try {
            pool.query(`select districtId, districtName, isActive from tblDistrict where isActive = 1 order by districtName`,
                (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    }
                    return callback(null, results);
                });
        }
        catch (error) {
            console.log('Error ', error)
        }
    }
}