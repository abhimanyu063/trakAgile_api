const pool = require('../../config/database');

module.exports = {
    getDashboardDetails: (callback) => {
        try {
            pool.query(`Select 
            (Select count(1) tripStarted from tblTrip where isTripStarted = 1) as tripStarted,
            (Select count(1) from tblTrip where isTripEnded = 1) as tripEnded,
            (Select count(1) from tblSiteWork where isWorkCompleted = 1) siteWorkCompletedCount,
            (Select count(1) from tblSiteWork where isSiteReportedIssue = 1) reportedSiteIssueCount,
            (Select count(1) from tblSiteWork where isWorkCompleted <> 1 AND isSiteReportedIssue <> 1) siteWorkInprogressCount,
            (Select count(1) from tblUser where isActive = 1) activeUserCount,
            (Select count(1) from tblRequest where isApproved = 1) pendingRequestCount,
            (Select count(1) from tblRequest where isApproved <> 1) approvedRequestCount`,
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