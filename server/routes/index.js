var express = require('express');
var router = express.Router();

var controllerTodo = require('../controllers/todo.js');

router
	.route('/todos')
	.get(controllerTodo.todoGetAll)
	.post(controllerTodo.todoAddTodo);

router
	.route('/todos/:todoId')
	.delete(controllerTodo.todoDeleteTodo)
	.put(controllerTodo.todoUpdateTodo);

module.exports = router;	



