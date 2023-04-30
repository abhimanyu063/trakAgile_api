const pool = require("../../config/database");

module.exports = {
    addUser: (data, callback) => {
        try {
            console.log(data.id);
            pool.query(`insert into tblUser (userName, password, name, isActive) values (?,?,?,?)`,
                [
                    data.userName,
                    data.password,
                    data.name,
                    data.isActive
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
    getUserById: (userId, callback) => {
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
    },
    validateAndGetUser: (data, callback) => {
        try {
            console.log(data.id);
            pool.query(`Select userid, userName, name from tblUser where userName = '${data.userName}' AND password = '${data.password}' AND isActive = 1`,
                [],
                (error, results, fields) => {
                    if (error) {
                        callback(error);
                    }
                    return callback(null, results[0]);
                });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
}