const pool = require("../../config/database");

module.exports = {
    addRequestService: (data, callback) => {
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
    getRequestsByUserIdService: (userId, callback) => {
        try {
            pool.query(`select requestId, requestComment, requestTypeId, userId, isApproved, approvedByUserId, requestDate, createdOn from tblRequest where userId = ${userId}`,
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