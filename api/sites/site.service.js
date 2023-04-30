const pool = require("../../config/database");

module.exports = {
    addSite: (data, callback) => {
        try {
            pool.query(`insert into tblSite (siteName, siteTypeId, siteVillageName, userId, createdOn, latitude, longitude, districtId, tripTypeId, tripId) values (?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.siteName,
                    data.siteTypeId,
                    data.siteVillageName,
                    data.userId,
                    new Date(),
                    data.latitude,
                    data.longitude,
                    data.districtId,
                    data.tripTypeId,
                    data.tripId
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
    getSitesByUserId: (userId, callback) => {
        try {
            pool.query(`select siteName, siteTypeDescription, s.siteTypeId, siteVillageName, userId, createdOn, latitude, longitude, s.districtId, districtName, tripTypeId,
            CASE WHEN tripTypeId = 1 THEN 'Local' 
                WHEN tripTypeId = 2 THEN 'Non-Local' 
                ELSE '' END tripTypeDescription, tripId
            FROM tblSite s
            LEFT JOIN tblSiteType st
                ON st.siteTypeId = s.siteTypeId
            LEFT JOIN tblDistrict d
                ON d.districtId = s.districtId
            where userId = ${userId}`,
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