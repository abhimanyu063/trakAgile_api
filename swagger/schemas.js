const { addDistrict, addDistrictResponse, getDistrict, getDistricts } = require('./district.schema');
const { addRequest, addRequestResponse, getRequest, getRequests } = require('./request.schema');
const { addSite, addSiteResponse, getSite } = require('./site.schema');
const { addSiteType, addSiteTypeResponse, getSiteType, getSiteTypes } = require('./sitetype.schema');
const { addSiteWork, addSiteWorkResponse, getSiteWork, getSiteWorks } = require('./sitework.schema');
const { addTrip, addTripResponse, getTrip, getTrips } = require('./trip.schema');
const { addUser, addUserResponse, getUser } = require('./user.schema');
const { addWorkType, addWorkTypeResponse, getWorkType, getWorkTypes } = require('./worktype.schema');

module.exports = {
    AddDistrict: addDistrict,
    AddDistrictResponse: addDistrictResponse,
    GetDistrict: getDistrict,
    GetDistricts: getDistricts,
    AddRequest: addRequest,
    AddRequestResponse: addRequestResponse,
    GetRequest: getRequest,
    GetRequests: getRequests,
    AddSite: addSite,
    AddSiteResponse: addSiteResponse,
    GetSite: getSite,
    AddSiteType: addSiteType,
    AddSiteTypeResponse: addSiteTypeResponse,
    GetSiteType: getSiteType,
    GetSiteTypes: getSiteTypes,
    AddSiteWork: addSiteWork,
    AddSiteWorkResponse: addSiteWorkResponse,
    GetSiteWork: getSiteWork,
    GetSiteWorks: getSiteWorks,
    AddTrip: addTrip,
    AddTripResponse: addTripResponse,
    GetTrip: getTrip,
    GetTrips: getTrips,
    AddUser: addUser,
    AddUserResponse: addUserResponse,
    GetUser: getUser,
    AddWorkType: addWorkType,
    AddWorkTypeResponse: addWorkTypeResponse,
    GetWorkType: getWorkType,
    GetWorkTypes: getWorkTypes
}