const pool = require('../../config/database');

module.exports = {
    validateForgetPassword: (data, callback) => {
        try {
            if (data.userName.trim() != "" && data.email.trim() != "" && data.mobile != 0) {
                pool.query(`select userName, email, mobile from tblUser where userName = '${data.userName}' and email = '${data.email}' and mobile =  '${data.mobile}' and isActive = 1`,
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
}