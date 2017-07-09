'use strict';

angular
	.module('mainPage')
	.factory('mainPageFactory', ['$http', function($http) {
			var baseUrl = '/todos';
			var todoService = {};

			todoService.todoGetAll = function() {
				return $http.get(baseUrl);
			};



			return todoService;
		}]);