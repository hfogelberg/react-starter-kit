module.exports = function(apiRouter, models, jwt, supersecret){
	// Return JSON Web Token if user is authenticated
	// The token will be used by the middleware for all requests that require login
	apiRouter.route('/authenticate')
		.post(function(req, res) {
			console.log('POST authenticate', req.body);
			models.Users.findOne({
				username: req.body.username
			}, function(err, user) {
				console.log('Selecting user');
				if(err) {
					throw err;
				} else {
					if(!user) {
						console.log('No user found');
						res.json({
							success: false,
							message: 'No user found'
						});
					} else if (user) {
						// Check password
						console.log('User found', user);
						var validPassword = user.comparePassword(req.body.password);
						if(!validPassword) {
							res.json({
								success: false,
								message: 'Wrong password'
							});
						} else {
							var token = jwt.sign({
								name: user.username,
							}, supersecret, {
								expiresInMinutes: 24 * 60 * 60
							});

							res.json({
								success: true,
								message: 'Enjoy your token',
								token: token
							})
						}
					}
				}
			})
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

	// middleware
	apiRouter.use(function(req, res, next) {
	  console.log('API called ' + req.body);
	  next();
	});

	apiRouter.route('/users')
		.get(function(req, res) {
			console.log('GET users');
			models.Users.find(function(err, users) {
				if(err) res.send(err);
				res.json(users);
			});
		})
		.post(function(req, res){
			console.log('POST users', req.body);
			var user = new models.Users({
				username: req.body.username,
				password: req.body.password
			});

			user.save(function(err, result){
				if(err) {
					res.send(JSON.stringify({err: err}));
				} else {
					res.json({message: 'User created with id ' + result._id});
				}
			});
		});

	apiRouter.route('/users/:user_id')
		.get(function(req, res) {
			models.Users.findById(req.params.user_id, function(err, user) {
				if(err) {
					res.send(err);
				} else {
					res.json(user);
				}
			});
		})
		.put(function(req, res) {
			models.Users.findById(req.params.user_id, function(err, user) {
				if(err) {
					res.send(err);
				} else {
					if(req.body.username)
						user.username = req.body.username;
					if(req.body.password)
						user.password = req.body.password;
					user.save(function(err) {
						if(err) {
							res.send(err)
						} else {
							res.json('User updated')
						}
					});
				}
			});
		})
		.delete(function(req, res) {
			models.Users.remove({
				_id: req.params.user_id
			}, function(err, user) {
				if(err) {
					res.send(err);
				} else {
					res.json({message: 'User removed'});
				}
			});
		});
};
