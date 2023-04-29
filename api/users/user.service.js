const pool = require("../../config/database");

module.exports = {
    addUserService: (data, callback) => {
        try {
            console.log(data.id);
            pool.query(`insert into tblUser (userName, password, name) values (?,?,?)`,
                [
                    data.userName,
                    data.password,
                    data.name,
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
    getUserByIdService: (userId, callback) => {
        try {
            pool.query(`select userId, userName, name from tblUser where userId = ${userId}`,
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