//todoAddTodo
var mongoose = require('mongoose');
var TodoList = mongoose.model('TodoList');


// get all todos
module.exports.todoGetAll = function(req, res) {
	TodoList
		.find()
		.exec(function(err, todos) {
			if (err) {
				console.log("Error finding todo");
				res
					.status(500)
					.json(err)
			} else {
				console.log("Found todos - ", todos.length);
				res
				.json(todos)
			}
			
		});
};


// add new todo
module.exports.todoAddTodo = function(req, res) {
	TodoList
		.create({
			severity : req.body.severity,
			task : req.body.task,
			isCompleted : req.body.isCompleted
		}, function(err, todo) {
			if (err) {
				console.log("Error creating todo");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Toto added ", todo);
				res
					.status(201)
					.json(todo);
			}
		});
};


// Delete Todo  
module.exports.todoDeleteTodo = function(req, res) {
	var todoId = req.params.todoId;
	TodoList
		.findByIdAndRemove(todoId)
		.exec(function(err, location) {
			if (err) {
				res
					.status(404)
					.json(err);
			} else {
				console.log("Todo deleted, id: ", todoId);
				res
					.status(204)
					.json();
			}
		});
};


// update todo
module.exports.todoUpdateTodo = function(req, res) {
	var todoId = req.params.todoId;

	TodoList
		.findById(todoId)
		.exec(function(err, todo){
			if (err) {
				console.log("Error finding todo");
				res
					.status(500)
					.json(err);
				return;	
			} else if (!todo) {
				console.log("Todo not found in db ", todoId);
				res
					.status(400)
					.json({
						"message" : "Todo ID not found" + todoId
					});
				return;	
			}
			todo.severity = req.body.severity;
			todo.task = req.body.task;
			todo.isCompleted = req.body.isCompleted;

			todo
				.save(function(err, todoUpdated) {
					if (err) {
						res
							.status(500)
							.json(err);
					} else {
						res
							.status(204)
							.json();
					}
				});
		});



};