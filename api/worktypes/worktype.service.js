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

    getWorkTypeByIdService: (id, callback) => {
        try {
            pool.query(`select workTypeName, isActive from tblWorkType`,
                [id],
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