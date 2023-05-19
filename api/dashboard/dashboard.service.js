const pool = require('../../config/database');

module.exports = {
    getDashboardDetails: (callback) => {
        try {
            pool.query(`Select 
            (Select count(1) tripStarted from tblTrip where IFNULL(isTripStarted,0) = 1 AND IFNULL(isTripEnded,0) <> 1) as tripStarted,
            (Select count(1) from tblTrip where IFNULL(isTripEnded,0) = 1) as tripEnded,
            (Select count(1) from tblSiteWork where IFNULL(isWorkCompleted,0) = 1) siteWorkCompletedCount,
            (Select count(1) from tblSiteWork where IFNULL(isSiteReportedIssue,0) = 1) reportedSiteIssueCount,
            (Select count(1) from tblSiteWork sw RIGHT JOIN tblSite s ON s.siteId = sw.siteId where IFNULL(isWorkCompleted,0) <> 1 AND IFNULL(isSiteReportedIssue,0) <> 1) siteWorkInprogressCount,
            (Select count(1) from tblUser where IFNULL(isActive,0) = 1) activeUserCount,
            (Select count(1) from tblRequest where IFNULL(isApproved,0) = 1) approvedRequestCount,
            (Select count(1) from tblRequest where IFNULL(isApproved,0) <> 1) pendingRequestCount`,
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