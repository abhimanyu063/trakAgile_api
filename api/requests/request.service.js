const pool = require('../../config/database');

module.exports = {
    addRequest: (data, callback) => {
        try {
            pool.query(`insert into tblRequest (requestComment, requestTypeId, userId, isApproved, approvedByUserId, requestDate, createdOn) values (?,?,?,?,?,?,?)`,
                [
                    data.requestComment,
                    data.requestTypeId,
                    data.userId,
                    data.isApproved,
                    data.approvedByUserId,
                    data.requestDate,
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
    getRequestsByUserId: (userId, callback) => {
        try {
            pool.query(`select requestId, requestComment, r.requestTypeId, rt.requestTypeDescription, r.userId, u2.name requestByUserName, isApproved, approvedByUserId, u.name approvedByUserName, requestDate, r.createdOn 
            from tblRequest r
            INNER JOIN tblRequestType rt
                on rt.requestTypeId = r.requestTypeId AND rt.isActive = 1
            LEFT JOIN tblUser u
                on u.userId = r.approvedByUserId
            LEFT JOIN tblUser u2
                on u2.userId = r.userId
            where r.userId = ${userId}
            order by requestId desc`,
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
    getRequests: (startDate, endDate, supervisorId, callback) => {
        try {
            console.log(startDate, endDate, supervisorId);
            pool.query(`select requestId, requestComment, r.requestTypeId, rt.requestTypeDescription, r.userId, u2.name requestByUserName, isApproved, approvedByUserId, u.name approvedByUserName, requestDate, r.createdOn, u2.supervisorId
            from tblRequest r
            INNER JOIN tblRequestType rt
                on rt.requestTypeId = r.requestTypeId AND rt.isActive = 1
            LEFT JOIN tblUser u
                on u.userId = r.approvedByUserId
            LEFT JOIN tblUser u2
                on u2.userId = r.userId
             WHERE r.createdOn between '${startDate} 00:00:00' and '${endDate} 23:59:59' and u2.supervisorId = ${supervisorId}
            order by requestId desc`,
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