'use strict';

angular
	.module('todoList')
	.component('todoList', {
		templateUrl: 'client/todolist/todoList.template.html',
		controller: ['todoListFactory', 
			function todoListController(todoListFactory){
				var self = this;

				//controller values
				self.sevSelected = 'Choose severity'
				self.newTask = '';
				self.todoItemEditMode = [];

				//self.showInputError = false;
				self.sev = [
					{use: 1, display: 'Severity 1'},
					{use: 2, display: 'Severity 2'},
					{use: 3, display: 'Severity 3'},
					{use: 4, display: 'Severity 4'},
				];

				// load all tasks
				todoListFactory
					.todoGetAll()
					.success(function(data) {
						self.todosList = data;
					});


				self.addTask = function() {
					/* Check input!!!
					if (self.sevSelected ==='Choose severity' || self.newTask ==='') {
						self.showInputError = true;
					} else {
						self.showInputError = false;	
					};*/
					
					
				};

				self.saveTodo = function(todo, todoItem) {
					self.changeMode(todoItem);
				};

				self.cancelEdit = function(todoItem) {
					self.changeMode(todoItem);
				}

				// set severity dropdown	
				self.setSeverity = function(sev) {
					self.sevSelected = sev.display;
				};

				//change mode
				self.changeMode = function(todoItem) {
					if (self.todoItemEditMode[todoItem]) {
						self.todoItemEditMode[todoItem] = false;
					} else {
						self.todoItemEditMode[todoItem] = true;
					}
				};

				
				

		}]
	});