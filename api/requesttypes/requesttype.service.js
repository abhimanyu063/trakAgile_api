const pool = require('../../config/database');

module.exports = {
    addRequestType: (data, callback) => {
        try {
            pool.query(`insert into tblRequestType (requestTypeDescription, isActive) values (?,?)`,
                [
                    data.requestTypeDescription,
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
    getRequestTypes: (callback) => {
        try {
            pool.query(`select requestTypeId, requestTypeDescription, isActive from tblRequestType where isActive = 1`,
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