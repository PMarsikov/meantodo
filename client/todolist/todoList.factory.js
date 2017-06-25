'use strict';

angular
	.module('todoList')
	.factory('todoListFactory', ['$http', function($http) {
			var baseUrl = '/todos';
			var todoService = {};

			todoService.todoGetAll = function() {
				return $http.get(baseUrl);
			};

			todoService.todoAddTodo = function(todo) {
				return $http.post(baseUrl, todo);
			};

			todoService.todoDeleteTodo = function(id) {
				return $http.delete(baseUrl + '/' + id);
			};

			todoService.todoUpdateTodo = function(id, todo) {
				return $http.put(baseUrl + '/' + id, todo)
			}


			return todoService;
		}]);