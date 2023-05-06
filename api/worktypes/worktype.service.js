const pool = require('../../config/database');

module.exports = {
    addWorkType: (data, callback) => {
        try {
            pool.query(`insert into tblWorkType (workTypeName, isActive) values (?,?)`,
                [
                    data.workTypeName,
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
    getWorkTypes: (callback) => {
        try {
            pool.query(`select workTypeId, workTypeName, isActive from tblWorkType where isActive = 1 order by workTypeName`,
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