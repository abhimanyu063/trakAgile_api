const pool = require("../../config/database");

module.exports = {
    addSiteTypeService: (data, callback) => {
        try {
            pool.query(`insert into tblSiteType (siteId, siteTypeDescription, isActive) values (?,?)`,
                [
                    data.siteTypeDescription,
                    data.isActive,
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
    getSiteTypesService: (callback) => {
        try {
            pool.query(`select siteTypeId, siteTypeDescription, isActive from tblSiteType`,
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