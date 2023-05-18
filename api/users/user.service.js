const pool = require('../../config/database');

module.exports = {
    addUser: (data, callback) => {
        try {
            pool.query(`insert into tblUser (password, name, userName, roleId, email, mobile, 
                address, city, state, country, isActive, createdOn) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.password,
                    data.name,
                    data.userName,
                    data.roleId,
                    data.email,
                    data.mobile,
                    data.address,
                    data.city,
                    data.state,
                    data.country,
                    data.isActive,
                    new Date(),
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
            pool.query(`select userId, userName, name, roleId, email, mobile, address, city, state, country, createdOn from tblUser where userId = ${userId} and isActive = 1`,
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
            pool.query(`Select userId, userName, name, roleId, email, mobile, address, city, state, country from tblUser where (userName = '${data.userName}' OR email = '${data.userName}') AND password = '${data.password}' AND isActive = 1`,
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
    validateAdminAndGetDetails: (data, callback) => {
        try {
            pool.query(`Select userId, userName, name, u.roleId, email, mobile, address, city, state, country 
            FROM tblUser u
            INNER JOIN tblRole r
                ON r.roleId = u.roleId AND lower(roleName) = 'admin' AND r.isActive = 1
            WHERE (userName = '${data.userName}' OR email = '${data.userName}') AND password = '${data.password}' AND u.isActive = 1`,
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
    }
}