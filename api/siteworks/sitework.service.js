const pool = require("../../config/database");

module.exports = {
    addSiteWorkService: (data, callback) => {
        try {
            pool.query(`insert into tblSiteWork (siteId, workTypeId, docPath, isSiteReportedIssue, isWorkCompleted) values (?,?,?,?,?)`,
                [
                    data.siteId,
                    data.workTypeId,
                    data.docPath,
                    data.isSiteReportedIssue,
                    data.isWorkCompleted,
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
    getSiteWorkBySiteIdService: (siteId, callback) => {
        try {
            pool.query(`select siteWorkId, siteId, workTypeId, docPath, isSiteReportedIssue, isWorkCompleted from tblSiteWork where siteId = ${siteId}`,
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