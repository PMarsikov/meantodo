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
				//var pp = $http.post(baseUrl, todo);
				return $http.post(baseUrl, todo);
				/*console.log('pp-');
				console.log(pp);
				console.log(typeof(pp));
				console.log('-pp');*/
				//return pp;
			};

			todoService.todoDeleteTodo = function(id) {
				return $http.delete(baseUrl + '/' + id);
			};

			todoService.todoUpdateTodo = function(id, todo) {
				return $http.put(baseUrl + '/' + id, todo)
			}


			return todoService;
		}]);