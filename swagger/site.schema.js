const addSite = {
    siteName: "",
    siteTypeId: 1,
    siteVillageName: "",
    createdBy: 1,
    createdOn: "",
    latitude: 11.222222,
    longitude: 11.222222,
    district: 1,
    tripTypeId: 1,
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
    createdBy: 1,
    createdOn: "",
    latitude: 11.222222,
    longitude: 11.222222,
    district: 1,
    tripTypeId: 1,
    tripTypeDescription: "",
}]

module.exports = { addSite, addSiteResponse, getSite };