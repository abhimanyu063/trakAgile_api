const pool = require('../../config/database');

module.exports = {
    getRoles: (callback) => {
        try {
            pool.query(`select roleId, roleName from tblRole where isActive = 1`,
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
}