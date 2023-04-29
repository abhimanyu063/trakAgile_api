const pool = require("../../config/database");

module.exports = {
    addSiteService: (data, callback) => {
        try {
            pool.query(`insert into tblSite (siteName, sitetypeId, siteVillegeName, createdBy, createdOn, latitude, longitude, districtId, tripTypeId) values (?,?,?,?,?,?,?)`,
                [
                    data.siteName,
                    data.sitetypeId,
                    data.siteVillegeName,
                    data.createdBy,
                    new Date(),
                    data.latitude,
                    data.longitude,
                    data.districtId,
                    data.tripTypeId,
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
    getSitesByUserIdService: (userId, callback) => {
        try {
            pool.query(`select siteName, siteTypeDescription, s.sitetypeId, siteVillegeName, createdBy, createdOn, latitude, longitude, s.districtId, districtName, tripTypeId, 
            CASE WHEN tripTypeId = 1 THEN 'Local' 
                WHEN tripTypeId = 2 THEN 'Non-Local' 
                ELSE '' END tripTypeDescription
            FROM tblSite s
            LEFT JOIN tblSiteType st
                ON st.siteTypeId = s.siteTypeId
            LEFT JOIN tblDistrict d
                ON d.districtId = s.districtId
            where createdBy = ${userId}`,
                [userId],
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