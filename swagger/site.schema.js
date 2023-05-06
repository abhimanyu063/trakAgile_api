const addSite = {
    siteName: "",
    siteTypeId: 1,
    siteVillageName: "",
    userId: 1,
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
    siteName: "",
    siteTypeId: 1,
    siteTypeDescription: "",
    siteVillageName: "",
    userId: 1,
    district: 1,
    tripTypeId: 1,
    tripTypeDescription: "",
    tripId: 1,
    createdOn: "",
}]

module.exports = { addSite, addSiteResponse, getSite };