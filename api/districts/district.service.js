const pool = require("../../config/database");

module.exports = {

    addDistrictService: (data, callback) => {
        try {

            pool.query(`insert into tblDistrict (districtName, isActive) values (?,?)`,
                [
                    data.districtName,
                    data.isActive,
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

    getDistrictByIdService: (id, callback) => {
        try {
            pool.query(`select districtName, isActive from tblDistrict`,

                (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    }
                    return callback(null, results[0]);
                });
        }
        catch (error) {
            console.log('Error ', error)
        }
    }
}