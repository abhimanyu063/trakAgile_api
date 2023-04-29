const addSiteWork = {
    SiteID: 1,
    WorkTypeID: 1,
    DocPath: "",
    IsSiteReportedIssue: 0,
    IsWorkCompleted: 0,
}

const addSiteWorkResponse = {
    success: 1,
    data: "",
}

const getSiteWork = {
    SiteWorkID: 1,
    SiteID: 1,
    WorkTypeID: 1,
    DocPath: "",
    IsSiteReportedIssue: 0,
    IsWorkCompleted: 0,
}

module.exports = { addSiteWork, addSiteWorkResponse, getSiteWork };