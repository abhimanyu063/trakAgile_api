const pool = require('../../config/database');

module.exports = {
    addSiteType: (data, callback) => {
        try {
            pool.query(`insert into tblSiteType (siteTypeDescription, isActive) values (?,?)`,
                [
                    data.siteTypeDescription,
                    1,
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
    getSiteTypes: (callback) => {
        try {
            pool.query(`select siteTypeId, siteTypeDescription, isActive from tblSiteType where isActive = 1 order by siteTypeDescription`,
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