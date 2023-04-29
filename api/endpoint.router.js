const districts = require('./districts/district.router');
const requests = require('./requests/request.router');
const sites = require('./sites/site.router');
const sitetypes = require('./sitetypes/sitetype.router');
const siteworks = require('./siteworks/sitework.router');
const trips = require('./trips/trip.router');
const users = require('./users/user.router');
const worktypes = require('./worktypes/worktype.router');

module.exports = [districts, requests, sites, sitetypes, siteworks, trips, users, worktypes];