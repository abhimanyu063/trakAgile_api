const { addDistrict, addDistrictResponse, getDistrict } = require('./district.schema');
const { addSite, addSiteResponse, getSite } = require('./site.schema');
const { addSiteType, addSiteTypeResponse, getSiteType } = require('./sitetype.schema');
const { addSiteWork, addSiteWorkResponse, getSiteWork } = require('./sitework.schema');
const { addTrip, addTripResponse, getTrip } = require('./trip.schema');
const { addUser, addUserResponse, getUser } = require('./user.schema');
const { addWorkType, addWorkTypeResponse, getWorkType } = require('./worktype.schema');

module.exports = {
    AddDistrict: addDistrict,
    AddDistrictResponse: addDistrictResponse,
    GetDistrict: getDistrict,
    AddSite: addSite,
    AddSiteResponse: addSiteResponse,
    GetSite: getSite,
    AddSiteType: addSiteType,
    AddSiteTypeResponse: addSiteTypeResponse,
    GetSiteType: getSiteType,
    AddSiteWork: addSiteWork,
    AddSiteWorkResponse: addSiteWorkResponse,
    GetSiteWork: getSiteWork,
    AddTrip: addTrip,
    AddTripResponse: addTripResponse,
    GetTrip: getTrip,
    AddUser: addUser,
    AddUserResponse: addUserResponse,
    GetUser: getUser,
    AddWorkType: addWorkType,
    AddWorkTypeResponse: addWorkTypeResponse,
    GetWorkType: getWorkType,
}