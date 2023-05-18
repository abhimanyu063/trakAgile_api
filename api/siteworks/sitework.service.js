const pool = require('../../config/database');

module.exports = {
    addSiteWork: (data, callback) => {
        try {
            pool.query(`insert into tblSiteWork (siteId, workTypeId, docPath, isSiteReportedIssue, isWorkCompleted, createdOn) values (?,?,?,?,?,?)`,
                [
                    data.siteId,
                    data.workTypeId,
                    data.docPath,
                    data.isSiteReportedIssue,
                    data.isWorkCompleted,
                    new Date(),
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
    getSiteWorkBySiteId: (siteId, callback) => {
        try {
            pool.query(`select siteWorkId, siteId, workTypeId, docPath, isSiteReportedIssue, isWorkCompleted, comment, createdOn from tblSiteWork where siteId = ${siteId} order by siteWorkId desc`,
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
    reportIssue: (data, callback) => {
        try {
            pool.query(`insert into tblSiteWork (siteId, isSiteReportedIssue,isWorkCompleted, comment, createdOn) values (?,?,?,?,?)`,
                [
                    data.siteId,
                    data.isSiteReportedIssue,
                    0,
                    data.comment,
                    new Date(),
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
}