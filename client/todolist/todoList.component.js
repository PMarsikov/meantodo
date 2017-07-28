'use strict';

angular
	.module('todoList')
	.component('todoList', {
		templateUrl: 'client/todolist/todoList.template.html',
		controller: ['todoListFactory', 
			function todoListController(todoListFactory){
				var self = this;
				//controller values
				self.sevSelectedDisplay = 'Choose severity'
				self.sevSelectedUse = '0'
				self.newTask = '';
				self.todoItemEditMode = [];
				self.currentEdit = [];
				self.formInputError = '';
				self.todosList = [];
				//self.taskEdit = [];

				//self.showInputError = false;
				self.sev = [
					{use: 1, display: 'Severity 1'},
					{use: 2, display: 'Severity 2'},
					{use: 3, display: 'Severity 3'},
					{use: 4, display: 'Severity 4'},
				];

				// load all tasks
				todoListFactory.todoGetAll().success(function(data) {
					self.todosList = data;
					//console.log(self.todosList);
				});


				self.addTask = function() {
					//form validation
				
					/**/
					if (self.sevSelectedUse === '0') {
						self.formInputError = 'Please choose severity';
						return;
					} else {
						if (self.newTaskForm.$invalid) {
							//self.formInputError = 'You have to specify task field';
							return;
						} else {
							self.formInputError = '';
						}
					};
					self.formInputError = '';///
					  
					var newTodo = {
						"severity" : self.sevSelectedUse,
						"task" : self.newTask,
						"isCompleted" : false
					};

					todoListFactory.todoAddTodo(newTodo).success(function(data) {
						self.todosList.push(data);
						self.sevSelectedDisplay = 'Choose severity'
						self.sevSelectedUse = '0'
						self.newTask = '';
					});
					
				};

				self.deleteTask = function(todo, todoItemId) {
					//self.todosList.splice(self.todosList.indexOf(todo),1);
					for (var i = 0; i < self.todosList.length; i++) {
						if (self.todosList[i]._id == todoItemId) {
							self.todosList.splice(i, 1);
						}
					}
					todoListFactory.todoDeleteTodo(todoItemId).success(function(data) {
						//
					});

				};

				self.editTask = function(todo, todoItem) {
					self.todoItemEditMode[todoItem] = true;
					self.currentEdit[todoItem] = todo.task;
				};

				self.cancelTask = function(todo, todoItem) {
					self.todoItemEditMode[todoItem] = false;
				};

				self.saveTask = function(todo, todoItem) {
					self.todoItemEditMode[todoItem] = false;
					todo.task = self.currentEdit[todoItem];
					
					todoListFactory.todoUpdateTodo(todo._id, todo).success(function(data) {
						//
					});

				};

				self.changeStatus = function(todo) {
					todo.isCompleted = !todo.isCompleted;
					todoListFactory.todoUpdateTodo(todo._id, todo).success(function(data) {
						//
					});					
				}

				// set severity dropdown	
				self.setSeverity = function(sev) {
					self.sevSelectedDisplay = sev.display;
					self.sevSelectedUse = sev.use;
					self.formInputError = '';

				};
  
		}]
	});