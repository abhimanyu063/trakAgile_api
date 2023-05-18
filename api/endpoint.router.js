const dashboard = require('./dashboard/dashboard.router');
const districts = require('./districts/district.router');
const requests = require('./requests/request.router');
const requestTypes = require('./requesttypes/requesttype.router');
const roles = require('./roles/role.router');
const sites = require('./sites/site.router');
const siteTypes = require('./sitetypes/sitetype.router');
const siteWorks = require('./siteworks/sitework.router');
const trips = require('./trips/trip.router');
const users = require('./users/user.router');
const workTypes = require('./worktypes/worktype.router');

module.exports = [dashboard, districts, requests, requestTypes, roles, sites, siteTypes, siteWorks, trips, users, workTypes];