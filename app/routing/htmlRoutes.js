// Require the dependencies

var path = require('path');

// Create and export functions required for the
// html routes

module.exports = function(app) {
	// A GET route to /survey that displays the
	// survey page
	app.get('/survey', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// A default, catch-all route that leads to home.html which
	// displays the home page.
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}
