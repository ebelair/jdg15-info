'use strict';

var challenges = require(__base + 'app/controllers/challenges_sol.js');

module.exports = function(app) {
	for(var c=1; c <= challenges.count; c++) {
		app.route('/defi'+c).get(challenges["doChallenge"+c]);
	}
};