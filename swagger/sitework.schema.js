const addSiteWork = {
    siteId: 1,
    workTypeId: 1,
    docPath: "",
    isSiteReportedIssue: 0,
    isWorkCompleted: 0,
}

const getSiteWork = {
    siteWorkId: 1,
    siteId: 1,
    workTypeId: 1,
    docPath: "",
    isSiteReportedIssue: 0,
    isWorkCompleted: 0,
    comment: "",
    createdOn: ""
}

const reportIssue = {
    siteId: 1,
    comment: ""
}

const getSiteWorks = [getSiteWork]

module.exports = { addSiteWork, getSiteWork, getSiteWorks, reportIssue };