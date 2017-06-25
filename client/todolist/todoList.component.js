'use strict';

angular
	.module('todoList')
	.component('todoList', {
		templateUrl: 'client/todolist/todoList.template.html',
		controller: ['$scope, todoListFactory', function todoListController($scope, todoListFactory){
			$scope.tt = "ddd";
			/*
			this.todoListAll = [];
			this.aa = "ddd";
			todoListFactory
				.todoGetAll()
				.success(function(data) {
					this.todoListAll = data;
				});*/
		}]
	});

