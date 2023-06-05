const pool = require('../../config/database');

module.exports = {
    addTrip: (data, callback) => {
        try {
            pool.query(`insert into tblTrip (userId, isTripStarted, isTripEnded, latitude, longitude, createdOn) values (?,?,?,?,?,?)`,
                [
                    data.userId,
                    1,
                    0,
                    data.latitude,
                    data.longitude,
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
    getTripsByUserId: (userId, callback) => {
        try {
            pool.query(`select tripId, userId, isTripStarted, isTripEnded, latitude, longitude, endLatitude, endLongitude, createdOn from tblTrip where userId = ${userId} order by tripId desc`,
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
            pool.query(`update tblTrip set isTripEnded = ${data.isTripEnded}, endLatitude = '${data.endLatitude}', endLongitude = '${data.endLongitude}', updatedOn = ? where tripId = ${data.tripId}`,
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