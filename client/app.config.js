'use strict';

angular
	.module('todoAppMain')
	.config(['$locationProvider' ,'$routeProvider',
		function config($locationProvider, $routeProvider) {

			//$locationProvider.hashPrefix('!');
			$routeProvider
				.when('/', {
					template: '<h1>H1HL</h1>'
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
