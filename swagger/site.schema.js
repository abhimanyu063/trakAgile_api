const addSite = {
    siteName: "",
    siteTypeId: 1,
    siteVillageName: "",
    userId: 1,
    createdOn: "",
    latitude: 11.222222,
    longitude: 11.222222,
    district: 1,
    tripTypeId: 1,
    tripId: 1
}

const addSiteResponse = {
    success: 1,
    data: "",
}

const getSite = [{
    siteId: 1,
    diteName: "",
    siteTypeId: 1,
    siteTypeDescription: "",
    siteVillageName: "",
    userId: 1,
    createdOn: "",
    latitude: 11.222222,
    longitude: 11.222222,
    district: 1,
    tripTypeId: 1,
    tripTypeDescription: "",
    tripId: 1
}]

module.exports = { addSite, addSiteResponse, getSite };