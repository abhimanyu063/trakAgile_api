const { getDashboardDetails } = require('./dashboard.schema');
const { addDistrict, addDistrictResponse, getDistrict, getDistricts } = require('./district.schema');
const { addRequest, addRequestResponse, getRequest, getRequests } = require('./request.schema');
const { addRequestType, addRequestTypeResponse, getRequestType, getRequestTypes } = require('./requesttype.schema');
const { getRoles } = require('./role.schema');
const { addSite, addSiteResponse, getSite, getSites } = require('./site.schema');
const { addSiteType, addSiteTypeResponse, getSiteType, getSiteTypes } = require('./sitetype.schema');
const { addSiteWork, addSiteWorkResponse, getSiteWork, getSiteWorks, reportIssue } = require('./sitework.schema');
const { addTrip, updateTrip, addTripResponse, getTrip, getTrips } = require('./trip.schema');
const { addUser, addUserResponse, getUser, validateUser, changePassword, getUsers, forgetPassword, validateUserNameEmailAndMobile, getSupervisors } = require('./user.schema');
const { addWorkType, addWorkTypeResponse, getWorkType, getWorkTypes } = require('./worktype.schema');

module.exports = {
    GetDashboardDetails: getDashboardDetails,
    AddDistrict: addDistrict,
    AddDistrictResponse: addDistrictResponse,
    GetDistrict: getDistrict,
    GetDistricts: getDistricts,
    AddRequest: addRequest,
    AddRequestResponse: addRequestResponse,
    GetRequest: getRequest,
    GetRequests: getRequests,
    AddRequestType: addRequestType,
    AddRequestTypeResponse: addRequestTypeResponse,
    GetRequestType: getRequestType,
    GetRequestTypes: getRequestTypes,
    GetRoles: getRoles,
    AddSite: addSite,
    AddSiteResponse: addSiteResponse,
    GetSite: getSite,
    GetSites: getSites,
    AddSiteType: addSiteType,
    AddSiteTypeResponse: addSiteTypeResponse,
    GetSiteType: getSiteType,
    GetSiteTypes: getSiteTypes,
    AddSiteWork: addSiteWork,
    AddSiteWorkResponse: addSiteWorkResponse,
    GetSiteWork: getSiteWork,
    GetSiteWorks: getSiteWorks,
    ReportIssue: reportIssue,
    AddTrip: addTrip,
    UpdateTrip: updateTrip,
    AddTripResponse: addTripResponse,
    GetTrip: getTrip,
    GetTrips: getTrips,
    AddUser: addUser,
    AddUserResponse: addUserResponse,
    GetUser: getUser,
    ValidateUser: validateUser,
    ChangePassword: changePassword,
    GetUsers: getUsers,
    ForgetPassword: forgetPassword,
    ValidateUserNameEmailAndMobile: validateUserNameEmailAndMobile,
    GetSupervisors: getSupervisors,
    AddWorkType: addWorkType,
    AddWorkTypeResponse: addWorkTypeResponse,
    GetWorkType: getWorkType,
    GetWorkTypes: getWorkTypes
}