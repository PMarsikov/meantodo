'use strict';

describe('todoApp', function(){

	beforeEach(module('todoList'));

	describe('test controller', function(){
		var ctrl,$httpBackend;
		beforeEach(inject(function($componentController, _$httpBackend_){
			
			
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('/todos')
						.respond([
								{
									isCompleted : true,
									severity : "1",
									task : "AAA SSS1"
								},
								{
									isCompleted : true,
									severity : "2",
									task : "AAA SSS2"
								}
							]);

/**/
			ctrl = $componentController('todoList');
			//expect(ctrl).toBeDefined();
		}));

		it('Check severity array', function() {
			expect(ctrl.sev.length).toBe(4);
		});
		
/**/
		it('Check severity array', function() {
			jasmine.addCustomEqualityTester(angular.equals);
			expect(ctrl.todosList).toEqual([]);
			$httpBackend.flush();
			expect(ctrl.todosList).toEqual(
							[
								{
									isCompleted : true,
									severity : "1",
									task : "AAA SSS1",
								},
								{
									isCompleted : true,
									severity : "2",
									task : "AAA SSS2",
								}
							]);
		});

	}); // - describe

}); // - describe


/*

isCompleted : true,
severity : "1",
task : "AAA 1ddd",
_id : "596269d2e686a41618c26242"


			self.deleteTask = function(todo, todoItemId) {
					self.todosList.splice(self.todosList.indexOf(todo),1);
					todoListFactory.todoDeleteTodo(todoItemId).success(function(data) {
						//
					});


					var newTodo = {
						"severity" : self.sevSelectedUse,
						"task" : self.newTask,
						"isCompleted" : false
					};
*/


/*
		var todosList = [
			{
				isCompleted : true,
				severity : "1",
				task : "AAA SSS1",
				_id : "596269d2e686a41618c26242"
			},
			{
				isCompleted : true,
				severity : "2",
				task : "AAA SSS2",
				_id : "596269d2e686a41618c26243"
			},
			{
				isCompleted : true,
				severity : "2",
				task : "AAA SSS3",
				_id : "596269d2e686a41618c26245"
			}			
		];

		it('Should be passed', function() {
			//expect(ctrl.sev.length).toBe(4);
			var newTodo = {
				"severity" : self.sevSelectedUse,
				"task" : self.newTask,
				"isCompleted" : false
			};

			var existTodo = {
				isCompleted : true,
				severity : "1",
				task : "AAA SSS1",
				_id : "596269d2e686a41618c26242"
			};

			//expect(todosList.length).toBe(3);			
			ctrl.deleteTask(existTodo, '596269d2e686a41618c26242');
			expect(todosList.length).toBe(2);
		});  

		*/