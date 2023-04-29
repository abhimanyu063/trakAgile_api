const pool = require("../../config/database");

module.exports = {
    addWorkTypeService: (data, callback) => {
        try {
            console.log(data.id);
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
    getWorkTypesService: (callback) => {
        try {
            pool.query(`select workTypeId, workTypeName, isActive from tblWorkType`,
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