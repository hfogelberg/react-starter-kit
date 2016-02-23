module.exports = function(mongoose, bcrypt) {
	var Hello = new mongoose.Schema({
		name: String
	});

	var User = new mongoose.Schema({
		username: String,
		password: String
	});

	User.pre('save', function(next){
		var user = this;
		if(!user.isModified('password')) return next();

		var salt = bcrypt.genSaltSync(10);
		user.password = bcrypt.hashSync(user.password, salt);
		next();
	});

	User.methods.comparePassword = function(password) {
		var user = this;
		return bcrypt.compareSync(password, user.password);
	}

	var models = {
		Hellos: mongoose.model('Hellos', Hello),
		Users: mongoose.model('Users', User)
	};

   return models;
}
