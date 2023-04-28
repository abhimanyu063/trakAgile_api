const pool = require("../../config/database");

module.exports = {

    addSiteWorkService: (data, callback) => {
        try {

            pool.query(`insert into tblSiteWork (siteID, workTypeID, docPath, isSiteReportedIssue, isWorkCompleted) values (?,?,?,?,?)`,
                [
                    data.siteID,
                    data.workTypeID,
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

    getSiteWorkByIdService: (id, callback) => {
        try {
            pool.query(`select siteID, workTypeID, docPath, isSiteReportedIssue, isWorkCompleted from tblSiteWork`,

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