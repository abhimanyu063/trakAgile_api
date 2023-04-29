const addSiteType = {
    siteTypeDescription: "",
    isActive: 1,
}

const addSiteTypeResponse = {
    success: 1,
    data: "",
}

const getSiteType = {
    siteTypeId: 1,
    siteTypeDescription: "",
    isActive: 1,
}

const getSiteTypes = [getSiteType]

module.exports = { addSiteType, addSiteTypeResponse, getSiteType, getSiteTypes };