const addSiteWork = {
    siteId: 1,
    workTypeId: 1,
    docPath: "",
    isSiteReportedIssue: 0,
    isWorkCompleted: 0,
}

const addSiteWorkResponse = {
    success: 1,
    data: "",
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
    isSiteReportedIssue: 1,
    comment: ""
}

const getSiteWorks = [getSiteWork]

module.exports = { addSiteWork, addSiteWorkResponse, getSiteWork, getSiteWorks, reportIssue };