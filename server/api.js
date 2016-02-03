module.exports = function(apiRouter, models){
	// middleware
	apiRouter.use(function(req, res, next) {
	  console.log('API called ' + req.body);
	  next();
	});

	// test route to make sure everything is working
	apiRouter.get('/', function(req, res) {
	  res.json({ message: 'The API is alive!!' });
	});

	apiRouter.get('/time', function(req, res){
		var now = new Date();
		res.json({message: 'The server says Hello! The time is ' + now});
	});
};
