const pool = require("../../config/database");

module.exports = {
    addUserService: (data, callback) => {
        try {
            console.log(data.id);

            pool.query(`insert into tblUser (UserName, Password, Name) values (?,?,?)`,
                [
                    data.UserName,
                    data.Password,
                    data.Name,
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
    getUserByIdService: (id, callback) => {
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