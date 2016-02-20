module.exports = function(mongoose) {
	var Hello = new mongoose.Schema({
		name: String
	});

	var models = {
		Hellos: mongoose.model('Hellos', Hello)
	};

   return models;
}
