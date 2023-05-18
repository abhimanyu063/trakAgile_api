const addSite = {
    siteName: "",
    siteTypeId: 1,
    siteVillageName: "",
    districtId: 1,
    tripTypeId: 1,
    tripId: 1
}

const addSiteResponse = {
    success: 1,
    data: "",
}

const getSite = {
    siteId: 1,
    siteName: "",
    siteTypeId: 1,
    siteTypeDescription: "",
    siteVillageName: "",
    userId: 1,
    userName: "",
    district: 1,
    tripTypeId: 1,
    tripTypeDescription: "",
    tripId: 1,
    createdOn: "",
    isTripStarted: 1,
    isTripEnded: 0,
    isWorkCompleted: 0,
    isSiteReportedIssue: 0,
    comment: "",
    latitude: "10.111111111111111",
    longitude: "10.1111111111111",
    endLatitude: "10.111111111111111",
    endLongitude: "10.1111111111111",
}

const getSites = [getSite]

module.exports = { addSite, addSiteResponse, getSite, getSites };