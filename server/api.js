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

	apiRouter.route('/hello')
		.post(function(req, res){
			console.log('Say hello called', req.body);
			var hello = new models.Hellos({
				name: req.body.name
			});

			hello.save(function(err, result){
				if(err){
					res.send(JSON.stringify({err: err}));
				} else {
					res.json({message: 'Server says hello to you ' + req.body.name + '. Check the Hello table in MogoDb\'s Test Db.'});
				}
			});
		});
};
