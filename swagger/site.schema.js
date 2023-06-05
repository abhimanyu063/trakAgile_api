const addSite = {
    siteName: "",
    siteTypeId: 1,
    siteVillageName: "",
    districtId: 1,
    tripTypeId: 1,
    tripId: 1
}

const getSite = {
    siteId: 1,
    siteName: "",
    siteTypeId: 1,
    siteTypeDescription: "",
    siteVillageName: "",
    userId: 1,
    name: "",
    districtId: 1,
    districtName: "",
    tripTypeId: 1,
    tripTypeDescription: "",
    tripId: 1,
    isTripStarted: 1,
    isTripEnded: 0,
    siteWorkId: 1,
    workTypeId: 10,
    workTypeName: "Development",
    isWorkCompleted: 0,
    isSiteReportedIssue: 0,
    comment: "",
    latitude: "10.111111111111111",
    longitude: "10.1111111111111",
    endLatitude: "10.111111111111111",
    endLongitude: "10.1111111111111",
    createdOn: "",
}

const addLocation = {
    tripID: 1,
    latitude: "10.111111111111111",
    longitude: "10.1111111111111",
    siteId: 1
}

const getLocation = {
    locationId: 1,
    tripId: 1,
    tripStartLatitude: "",
    tripStartLongitude: "",
    latitude: "10.111111111111111",
    longitude: "10.1111111111111",
    createdOn: "",
    siteId: 1,
    siteName: "",
    siteCreatedOn: "",
    userId: 1,
    name: ""
}

const getReportedSites = [{
    comment: "Site Reported issue found...!!!",
    createdOn: "2023-06-03T12:12:57.000Z",
    siteVillageName: "Village B",
    siteName: "Site B",
    name: "Sujeet, Kumar",
    email: "sj@gmail.com",
    mobile: "9999999999",
    address: "Purnia",
    supervisorId: 3
}]

const getSites = [getSite]

module.exports = { addSite, getSite, getSites, addLocation, getLocation, getReportedSites };