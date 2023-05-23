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
            if (data.userName.trim() != "" && data.password != "") {
                pool.query(`Select userId, userName, name, roleId, email, mobile, address, city, state, country from tblUser where (userName = '${data.userName}' OR email = '${data.userName}') AND password = '${data.password}' AND isActive = 1`,
                    [],
                    (error, results, fields) => {
                        if (error) {
                            callback(error);
                        }
                        return callback(null, results[0]);
                    });
            }
            else {
                callback('empty credentials');
            }
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    validateAdminAndGetDetails: (data, callback) => {
        try {
            if (data.userName.trim() != "" && data.password != "") {
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
            else {
                callback('empty credentials');
            }
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
    validateForgetPassword: (data, callback) => {
        try {
            if (data.email.trim() != "") {
                pool.query(`select username, email, mobile, password from tblUser where email = '${data.email}' and isActive = 1`,
                    [],
                    (error, results, fields) => {
                        if (error) {
                            callback(error);
                        }
                        return callback(null, results[0]);
                    });
            }
            else {
                callback('empty fields');
            }
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    validateUserNameandEmail: (data, callback) => {
        try {
            pool.query(`select userName, email, mobile from tblUser where userName = '${data.userName}'  or email = '${data.email}' or mobile = '${data.mobile}'`,
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
    getUserDetails: (data, callback) => {
        try {
            pool.query(`select userName, name, email, mobile, address, city, state, country, isActive, createdOn, roleId from tblUser`,
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
    },
    getSiteReportedIsuueDetails: (data, callback) => {
        try {
            pool.query(`select  sw.comment, sw.createdOn,  s.siteVillageName, s.siteName, u.name, u.email, u.mobile, u.address from tblSiteWork sw
            Inner Join tblSite s on sw.siteid = s.siteID
            Inner join tblTrip t on sw.siteid = t.tripID
            Inner join tblUser u on t.userID = u.userId
            where isSiteReportedIssue = 1`,
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
    },
}