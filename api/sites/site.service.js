const pool = require("../../config/database");

module.exports = {

    addSiteService: (data, callback) => {
        try {

            pool.query(`insert into tblSite (siteName, sitetypeID, siteVillegeName, createdBy, createdOn, latitude, longitude) values (?,?,?,?,?,?,?)`,
                [
                    data.siteName,
                    data.sitetypeID,
                    data.siteVillegeName,
                    data.createdBy,
                    new Date(),
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

    getSiteByIdService: (id, callback) => {
        try {
            pool.query(`select siteName, sitetypeID, siteVillegeName, createdBy, createdOn, latitude, longitude from tblSite`,
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