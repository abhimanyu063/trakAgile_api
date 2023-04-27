const districts = require('./districts/district.router');
const sites = require('./sites/site.router');
const trips = require('./trips/trip.router');
const users = require('./users/user.router');

module.exports = { districts, sites, trips, users };
