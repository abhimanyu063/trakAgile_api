const addSite = {
    siteName: "",
    siteTypeId: 1,
    siteVillegeName: "",
    createdBy: 1,
    createdOn: "",
    latitude: 1111111111.222222,
    longitude: 1111111111.222222,
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
    siteVillegeName: "",
    createdBy: 1,
    createdOn: "",
    latitude: 1111111111.222222,
    longitude: 1111111111.222222,
    district: 1,
    tripTypeId: 1,
    tripTypeDescription: "",
}]

module.exports = { addSite, addSiteResponse, getSite };