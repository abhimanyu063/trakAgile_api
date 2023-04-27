const districts = require('./districts/district.router');
const sites = require('./sites/site.router');
const sitetypes = require('./sites/site.router');
const siteworks = require('./trips/trip.router');
const trips = require('./trips/trip.router');
const users = require('./users/user.router');
const worktypes = require('./users/user.router');

module.exports = { districts, sites, sitetypes, siteworks, trips, users, worktypes };