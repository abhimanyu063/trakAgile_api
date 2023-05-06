const pool = require('../../config/database');

module.exports = {
    addSite: (data, callback) => {
        try {
            pool.query(`insert into tblSite (siteName, siteTypeId, siteVillageName, userId, createdOn, districtId, tripTypeId, tripId) values (?,?,?,?,?,?,?,?)`,
                [
                    data.siteName,
                    data.siteTypeId,
                    data.siteVillageName,
                    data.userId,
                    new Date(),
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
            pool.query(`select siteId, siteName, s.siteTypeId, siteTypeDescription, siteVillageName, userId, s.districtId, districtName, tripTypeId,
            CASE WHEN tripTypeId = 1 THEN 'Local' 
                WHEN tripTypeId = 2 THEN 'Non-Local' 
                ELSE '' END tripTypeDescription, tripId, createdOn
            FROM tblSite s
            LEFT JOIN tblSiteType st
                ON st.siteTypeId = s.siteTypeId AND st.isActive = 1
            LEFT JOIN tblDistrict d
                ON d.districtId = s.districtId AND d.isActive = 1
            where userId = ${userId}
            order by s.siteId desc`,
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