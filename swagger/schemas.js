const { getDashboardDetails } = require('./dashboard.schema');
const { addDistrict, addResponse, getDistrict, getDistricts } = require('./district.schema');
const { addRequest, getRequest, getRequests } = require('./request.schema');
const { addRequestType, getRequestType, getRequestTypes } = require('./requesttype.schema');
const { getRoles } = require('./role.schema');
const { addSite, getSite, getSites, addLocation, getLocation, getReportedSites } = require('./site.schema');
const { addSiteType, getSiteType, getSiteTypes } = require('./sitetype.schema');
const { addSiteWork, getSiteWork, getSiteWorks, reportIssue } = require('./sitework.schema');
const { addTrip, updateTrip, getTrip, getTrips } = require('./trip.schema');
const { addUser, getUser, validateUser, changePassword, getUsers, forgetPassword, validateUserNameEmailAndMobile, getSupervisors, getUserHierarchy, getOnlineUsers } = require('./user.schema');
const { addWorkType, getWorkType, getWorkTypes } = require('./worktype.schema');

module.exports = {
    GetDashboardDetails: getDashboardDetails,
    AddDistrict: addDistrict,
    AddResponse: addResponse,
    GetDistrict: getDistrict,
    GetDistricts: getDistricts,
    AddRequest: addRequest,
    GetRequest: getRequest,
    GetRequests: getRequests,
    AddRequestType: addRequestType,
    GetRequestType: getRequestType,
    GetRequestTypes: getRequestTypes,
    GetRoles: getRoles,
    AddSite: addSite,
    GetSite: getSite,
    GetSites: getSites,
    AddLocation: addLocation,
    GetLocation: getLocation,
    GetReportedSites: getReportedSites,
    AddSiteType: addSiteType,
    GetSiteType: getSiteType,
    GetSiteTypes: getSiteTypes,
    AddSiteWork: addSiteWork,
    GetSiteWork: getSiteWork,
    GetSiteWorks: getSiteWorks,
    ReportIssue: reportIssue,
    AddTrip: addTrip,
    UpdateTrip: updateTrip,
    GetTrip: getTrip,
    GetTrips: getTrips,
    AddUser: addUser,
    GetUser: getUser,
    ValidateUser: validateUser,
    ChangePassword: changePassword,
    GetUsers: getUsers,
    ForgetPassword: forgetPassword,
    ValidateUserNameEmailAndMobile: validateUserNameEmailAndMobile,
    GetSupervisors: getSupervisors,
    GetUserHierarchy: getUserHierarchy,
    GetOnlineUsers: getOnlineUsers,
    AddWorkType: addWorkType,
    GetWorkType: getWorkType,
    GetWorkTypes: getWorkTypes
}