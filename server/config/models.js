module.exports = function(mongoose) {
	var Todo = new mongoose.Schema({
		text: String
	});

	var models = {
		Todos: mongoose.model('Todos', Todo)
	};

   return models;
}
