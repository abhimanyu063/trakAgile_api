const pool = require("../../config/database");

module.exports = {

    addTripService: (data, callback) => {
        try {
            console.log(data.id);

            pool.query(`insert into tblTrip (userID, isTripStarted, isTripEnded, createdOn, isWorkCompleted, latitude, longitude) values (?,?,?,?,?,?,?)`,
                [
                    data.userID,
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

    getTripByIdService: (id, callback) => {
        datetime
        try {
            pool.query(`select tripID, userID, isTripStarted, isTripEnded, createdOn, isWorkCompleted, latitude, longitude from tblTrip`,
                [id],
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
    }
}