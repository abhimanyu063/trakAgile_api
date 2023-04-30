const pool = require("../../config/database");

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
            pool.query(`select requestId, requestComment, r.requestTypeId, rt.requestTypeDescription, r.userId, isApproved, approvedByUserId, u.name approvedByUserName, requestDate, createdOn 
            from tblRequest r
            INNER JOIN tblRequestType rt
                on rt.requestTypeId = r.requestTypeId AND rt.isActive = 1
            LEFT JOIN tblUser u
                on u.userId = r.approvedByUserId
            where r.userId = ${userId}`,
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