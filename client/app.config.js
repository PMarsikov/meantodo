'use strict';

angular
	.module('todoAppMain')
	.config(['$locationProvider' ,'$routeProvider',
		function config($locationProvider, $routeProvider) {

			//$locationProvider.hashPrefix('!');
			$routeProvider
				.when('/', {
					//template: '<a href="#/todos">Todos Page</a> <h1>TODO app</h1>'
					template: '<main-page></main-page>'
					
				})
				.when('/todos', {
					template: '<todo-list></todo-list>'
				})
				/*.when('/phones/:phoneId', {
					template: '<phone-detail></phone-detail>'
				})*/
				.otherwise('/');
		}
	]);
