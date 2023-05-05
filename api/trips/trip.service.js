const pool = require('../../config/database');

module.exports = {
    addTrip: (data, callback) => {
        try {
            pool.query(`insert into tblTrip (userId, isTripStarted, isTripEnded, createdOn, isWorkCompleted, latitude, longitude) values (?,?,?,?,?,?,?)`,
                [
                    data.userId,
                    data.isTripStarted,
                    data.isTripEnded,
                    new Date(),
                    data.isWorkCompleted,
                    data.latitude,
                    data.longitude,
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
    getTripsByUserId: (userId, callback) => {
        try {
            pool.query(`select tripId, userId, isTripStarted, isTripEnded, createdOn, isWorkCompleted, latitude, longitude, endLatitude, endLongitude from tblTrip where userId = ${userId}`,
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
    updateTrip: (data, callback) => {
        try {
            pool.query(`update tblTrip set isTripEnded = ${data.isTripEnded}, isWorkCompleted = ${data.isWorkCompleted}, endLatitude = '${data.endLatitude}', endLongitude = '${data.endLongitude}', updatedOn = ? where tripId = ${data.tripId}`,
                [new Date()],
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