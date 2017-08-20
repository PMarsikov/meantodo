'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('MEAN ToDo Application', function() {

	it('should open /todos', function() {
		browser.get('#/todos');
		expect(browser.getLocationAbsUrl()).toBe('/todos');
	});

	describe('View: Phone list', function() {
		beforeEach(function() {
			browser.get('#/todos');
		});	
		
		it('should add new todo', function() {
			var todos = element.all(by.repeater('todo in $ctrl.todosList'));
			expect(todos.count()).toBe(0);
			
			
			element.all(by.css('.dropdown-toggle')).first().click();
		//	browser.sleep(3000);
			
			element.all(by.css('.dropdown')).first().click();
			element(by.model('$ctrl.newTask')).sendKeys('new 1 test task');
			
			element.all(by.css('.btn-success')).first().click();
		//	browser.sleep(3000);
			expect(element.all(by.repeater('todo in $ctrl.todosList')).count()).toBe(1);
						
		});
		
	});

});
