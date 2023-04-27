const pool = require("../../config/database");

module.exports = {

    create: (data, callback) => {
        try {
            console.log(data.id);

            pool.query(`insert into user (id, name, email, mobile, password) values (?,?,?,?,?)`,
                [
                    data.id,
                    data.name,
                    data.email,
                    data.mobile,
                    data.password,
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

    getWorkTypeById: (id, callback) => {
        try {
            pool.query(`select UserID, UserName, Name from tblUser`,
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