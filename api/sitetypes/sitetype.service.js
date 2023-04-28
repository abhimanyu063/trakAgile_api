const pool = require("../../config/database");

module.exports = {

    addSiteTypeService: (data, callback) => {
        try {

            pool.query(`insert into tblSiteType (siteID, siteTypeDescription, isActive) values (?,?)`,
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

    getSiteTypeByIdService: (id, callback) => {
        try {
            pool.query(`select siteTypeDescription, isActive from tblSiteType`,

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