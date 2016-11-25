var Swagger = require('swagger-client');

function AmadeusService() {
  
  return new Swagger({
	  url: '/swagger.yml',
	  usePromise: true
	})
	.then(function(client) {
	  return client;
	});

}

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};