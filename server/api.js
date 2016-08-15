module.exports = function(apiRouter, models, jwt, supersecret){
	// User signup
	apiRouter.route('/users')
		.post(function(req, res){
			console.log('POST users', req.body);
			var message = '',
					token = '';

			// Check if there's allready a user with that Id. Must be unique
			models.Users.find({username: req.body.username}, function(err, res){
				console.log('Checking user with name: ' + req.body.username);
				if(res.length > 0) {
					console.log('User name not unique');
					message = 'That user name is already in use.';
				} else {
				var user = new models.Users({
					username: req.body.username,
					password: req.body.password
				});

				user.save(function(err, result){
					if(err) {
						res.send(JSON.stringify({err: err}));
					} else {
						token = jwt.sign({
							name: user.username,
						}, supersecret, {
							expiresIn: 24 * 60 * 60
						});
						message = 'User created with id ' + result._id;
					}
				});
			}
		});

		console.log(message);
		console.log('Token: ' + token);

		res.json({
			message: message,
			token: token
		});

	});

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
							console.log('Password is not valid');
							res.json({
								success: false,
								message: 'Wrong password'
							});
						} else {
							console.log('Password is valid. Creating token');
							var token = jwt.sign({
								name: user.username,
							}, supersecret, {
								expiresIn: 24 * 60 * 60
							});

							var message = 'User successfully logged in. User id ' + user._id;
							console.log(message);
							console.log('Token: ' + token);
							res.json({
								message: message,
								token: token
							});
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

	// Middleware
	// Authenticate token
	apiRouter.use(function(req, res, next) {
	  console.log('API middleware called ' + req.body);
		var token = req.body.token || req.query.token || req.headers['x-access-token'];

		if (token) {
			console.log('Token to authenticate: ' + token);
			jwt.verify(token, supersecret, function (err, decoded){
				if (err) {
					return res.status(403).send({
						succes: false,
						message: 'Failed to authenticate token'
					});
				} else {
					// Token is OK
					// Save for request and use for other routes
					req.decoded = decoded;
					next()
				}
			});
		} else {
			// No token.
			// Return HTTP 403 (Access forbidden)
			console.log('There\'s no token');
			return res.status(403).send({
				success: false,
				message: 'No token provided.'
			});
		}
	});

	// API calls that require a token
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
