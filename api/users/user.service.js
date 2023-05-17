const pool = require('../../config/database');

module.exports = {
    addUser: (data, callback) => {
        try {
            pool.query(`insert into tblUser (password, name, isActive, userName, createdOn, email, mobile, 
                address, city, state, country) values (?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.password,
                    data.name,
                    data.isActive,
                    data.userName,
                    new Date(),
                    data.email,
                    data.mobile,
                    data.address,
                    data.city,
                    data.state,
                    data.country,
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
            pool.query(`select userId, userName, name, createdOn from tblUser where userId = ${userId} and isActive = 1`,
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
            pool.query(`Select userId, userName, name from tblUser where userName = '${data.userName}' AND password = '${data.password}' AND isActive = 1`,
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
    changePassword: (data, callback) => {
        try {
            pool.query(`Update tblUser set password = '${data.newPassword}' where userId = ${data.userId} and password = '${data.oldPassword}'`,
                [],
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
}