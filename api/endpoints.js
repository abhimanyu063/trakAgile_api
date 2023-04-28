const districts = require('./districts/district.router');
const sites = require('./sites/site.router');
const sitetypes = require('./sitetypes/sitetype.router');
const worktypes = require('./worktypes/worktype.router');
const siteworks = require('./siteworks/sitework.router');
const trips = require('./trips/trip.router');
const users = require('./users/user.router');

module.exports = { districts, sites, sitetypes, siteworks, trips, users, worktypes };