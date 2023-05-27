const pool = require('../../config/database');

module.exports = {
    addSiteWork: (data, callback) => {
        try {
            pool.query(`insert into tblSiteWork (siteId, workTypeId, comment, docPath, isWorkCompleted, isSiteReportedIssue, createdOn) values (?,?,?,?,?,?,?)`,
                [
                    data.siteId,
                    data.workTypeId,
                    data.documentDescription,
                    data.docPath,
                    1,
                    0,
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
            pool.query(`insert into tblSiteWork (siteId, isSiteReportedIssue, isWorkCompleted, comment, createdOn) values (?,?,?,?,?)`,
                [
                    data.siteId,
                    1,
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