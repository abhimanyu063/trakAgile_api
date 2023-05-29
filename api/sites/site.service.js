const pool = require('../../config/database');

module.exports = {
    addSite: (data, callback) => {
        try {
            pool.query(`insert into tblSite (siteName, siteTypeId, siteVillageName, createdOn, districtId, tripTypeId, tripId) values (?,?,?,?,?,?,?)`,
                [
                    data.siteName,
                    data.siteTypeId,
                    data.siteVillageName,
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
            pool.query(`select s.siteId, siteName, s.siteTypeId, siteTypeDescription, siteVillageName, t.userId, u.Name name, s.districtId, districtName, tripTypeId,
            CASE WHEN tripTypeId = 1 THEN 'Local' 
                WHEN tripTypeId = 2 THEN 'Non-Local' 
                ELSE '' END tripTypeDescription, 
            s.tripId, isTripStarted, isTripEnded, sw.siteWorkId, sw.workTypeId, wt.workTypeName, IFNULL(sw.isWorkCompleted,0) isWorkCompleted, IFNULL(sw.isSiteReportedIssue,0) isSiteReportedIssue, sw.comment, latitude, longitude, endLatitude, endLongitude, s.createdOn
            FROM tblTrip t
            INNER JOIN tblUser u
                ON u.userId = t.userId AND u.isActive = 1
            INNER JOIN tblSite s
                ON s.tripId = t.tripId
            LEFT JOIN tblSiteType st
                ON st.siteTypeId = s.siteTypeId AND st.isActive = 1
            LEFT JOIN tblDistrict d
                ON d.districtId = s.districtId AND d.isActive = 1
            LEFT JOIN tblSiteWork sw
                ON sw.siteId = s.siteId
            LEFT JOIN tblWorkType wt
                ON wt.workTypeId = sw.workTypeId
            WHERE t.userId = ${userId}
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
    },
    getSites: (startDate, endDate, status, callback) => {
        try {
            pool.query(`select s.siteId, siteName, s.siteTypeId, siteTypeDescription, siteVillageName, t.userId, u.Name name, s.districtId, districtName, tripTypeId,
            CASE WHEN tripTypeId = 1 THEN 'Local' 
                WHEN tripTypeId = 2 THEN 'Non-Local' 
                ELSE '' END tripTypeDescription, 
            s.tripId, isTripStarted, isTripEnded, sw.siteWorkId, sw.workTypeId, wt.workTypeName, IFNULL(sw.isWorkCompleted,0) isWorkCompleted, IFNULL(sw.isSiteReportedIssue,0) isSiteReportedIssue, sw.comment, latitude, longitude, endLatitude, endLongitude, s.createdOn
            FROM tblTrip t
            INNER JOIN tblUser u
                ON u.userId = t.userId AND u.isActive = 1
            INNER JOIN tblSite s
                ON s.tripId = t.tripId AND s.createdOn between '${startDate} 00:00:00' and '${endDate} 23:59:59'
            LEFT JOIN tblSiteType st
                ON st.siteTypeId = s.siteTypeId AND st.isActive = 1
            LEFT JOIN tblDistrict d
                ON d.districtId = s.districtId AND d.isActive = 1
            LEFT JOIN tblSiteWork sw
                ON sw.siteId = s.siteId
            LEFT JOIN tblWorkType wt
                ON wt.workTypeId = sw.workTypeId
            where (${status} = 0) 
                OR (${status} = 1 AND IFNULL(sw.isWorkCompleted,0) = 1 AND IFNULL(sw.isSiteReportedIssue,0) = 0)
                OR (${status} = 2 AND IFNULL(sw.isWorkCompleted,0) = 0 AND IFNULL(sw.isSiteReportedIssue,0) = 0)
                OR (${status} = 3 AND IFNULL(sw.isWorkCompleted,0) = 0 AND IFNULL(sw.isSiteReportedIssue,0) = 1)
            order by s.siteId desc`,
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
    getImage: (siteWorkId, callback) => {
        try {
            pool.query(`Select docPath from tblSiteWork where siteWorkId = ${siteWorkId}`,
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
    },
    addLocation: (data, callback) => {
        try {
            pool.query(`insert into tblLocation (tripID, latitude, longitude, createdOn) values (?,?,?,?)`,
                [
                    data.tripID,
                    data.latitude,
                    data.longitude,
                    new Date()
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
    getSiteReportedIsuueDetails: (data, callback) => {
        try {
            pool.query(`select  sw.comment, sw.createdOn,  s.siteVillageName, s.siteName, u.name, u.email, u.mobile, u.address from tblSiteWork sw
            Inner Join tblSite s on sw.siteid = s.siteID
            Inner join tblTrip t on sw.siteid = t.tripID
            Inner join tblUser u on t.userID = u.userId
            where isSiteReportedIssue = 1 order by sw.createdOn desc`,
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
    getLocation: (userId, callback) => {
        try {
            pool.query(`SELECT l.latitude, l.longitude, l.tripId, t.createdOn, u.name 
            from tblUser u
            INNER JOIN tblTrip t on u.userId = t.userId and IFNULL(isTripStarted ,0) = 1 and  IFNULL(isTripEnded ,0) = 0
            INEER JOIN tblLocation l on l.tripId = t.tripId
            WHERE (t.userId = ${userId} or ${userId} = 0) order by t.createdOn desc`,
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