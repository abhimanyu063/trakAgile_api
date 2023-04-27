const pool = require("../../config/database");

module.exports = {

    create: (data, callback) => {
        try {

            console.log(data.districtName);

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

    getDistrictById: (districtID, callback) => {
        try {
            console.log(districtID)
            pool.query(`select districtName, isActive from tblDistrict`,
                [districtID],
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