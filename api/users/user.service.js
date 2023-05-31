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
            pool.query(`select userId, userName, name, roleId, email, mobile, address, city, state, country, supervisorId, createdOn from tblUser where userId = ${userId} and isActive = 1`,
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
            pool.query(`Select userId, userName, name, roleId, email, mobile, address, city, state, country, supervisorId 
                from tblUser where (userName = '${data.userName}' OR email = '${data.userName}' OR mobile = '${data.userName}') AND password = '${data.password}' AND isActive = 1`,
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
            WHERE (userName = '${data.userName}' OR email = '${data.userName}' OR mobile = '${data.userName}') AND password = '${data.password}' AND u.isActive = 1`,
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
    getUsers: (data, callback) => {
        try {
            pool.query(`select userId, userName, name, email, mobile, address, city, state, country, u.roleId, roleName, supervisorId, u.isActive, createdOn 
            from tblUser u INNER JOIN tblRole r ON r.roleId = u.roleId AND r.isActive = 1 order by createdOn desc`,
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
    forgetPassword: (userName, callback) => {
        try {
            if (userName.trim() != "") {
                pool.query(`select name, username, email, mobile, password from tblUser where userName = '${userName}' OR email = '${userName}' OR mobile = '${userName}' and isActive = 1`,
                    [],
                    (error, results, fields) => {
                        if (error) {
                            callback(error);
                        }
                        return callback(null, results[0]);
                    });
            }
            else {
                callback('empty user name');
            }
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    validateUserNameEmailAndMobile: (data, callback) => {
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
    getOnlineUsers: (callback) => {
        try {
            pool.query(`SELECT st.siteTypeDescription, d.districtName,
            u.name, u.email, s.tripTypeId, count(1) as count from tblSite s
            INNER JOIN tblTrip t on s.tripId = t.tripId
            INNER JOIN tblSiteType st on st.siteTypeId = s.siteTypeID
            INNER JOIN tblDistrict d on d.districtId = s.districtId
            INNER JOIN tblUser u on u.userId = t.userID
            WHERE t.isTripStarted = 1 and u.isActive = 1
            group by st.siteTypeDescription, d.districtName,
            u.name, u.email, s.tripTypeId`,
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
    getSupervisor: (callback) => {
        try {
            pool.query(`select supervisorId, name, roleId from tblUser where roleId > 2 and isActive = 1`,
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
    getUserHierarchy: (callback) => {
        try {
            pool.query(`select u.userId, u.name, u.userName, u.email, u.mobile, u.address, u.city, u.state, u.country, u.roleId, r.roleName title, u.supervisorId, IFNULL(u2.name,'') supervisorName , 'ngx-org-ceo' cssClass, 'assets/user.png' image
            from tblUser u 
            INNER JOIN tblRole r
                ON r.roleId = u.roleId AND r.roleId IN (2,3) AND r.isActive = 1
            LEFT JOIN tblUser u2
                ON u2.userId = u.supervisorId AND u2.isActive = 1
            where u.isActive = 1`,
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