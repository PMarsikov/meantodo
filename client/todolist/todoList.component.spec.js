//https://rav.pw/httpbackend-when-vs-expect/
// https://rav.pw/unit-testing-angularjs-applications/

'use strict';



describe('test suite 1 ', function() {
	var $httpBackend, todoListFactory, ctrl;

	beforeEach(module('todoList'));

	beforeEach(inject(function($componentController, _$httpBackend_, _todoListFactory_) {

/* ctrl = $componentController('homePage', { $scope: scope }); expect(ctrl).toBeDefined(); */
		todoListFactory = _todoListFactory_;
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('/todos')
			.respond([
					{_id: '1', severity: '1', task: 'brand new test task1', isCompleted: false}, 
					{_id: '2', severity: '2', task: 'brand new test task2', isCompleted: true},
					{_id: '3', severity: '3', task: 'brand new test task3', isCompleted: false},
					{_id: '4', severity: '3', task: 'brand new test task4', isCompleted: true}
				]);
		ctrl = $componentController('todoList');		
	}));

	it('should controller be defined', function() {
		expect(ctrl).toBeDefined();
	});



	it('should get all todos', function() {
		//jasmine.addCustomEqualityTester(angular.equals);
		expect(ctrl.todosList).toEqual([]);
		$httpBackend.flush();
		expect(ctrl.todosList).toEqual([
					{_id: '1', severity: '1', task: 'brand new test task1', isCompleted: false}, 
					{_id: '2', severity: '2', task: 'brand new test task2', isCompleted: true},
					{_id: '3', severity: '3', task: 'brand new test task3', isCompleted: false},
					{_id: '4', severity: '3', task: 'brand new test task4', isCompleted: true}
				]);
	});

	it('should add task', function() {
		expect(ctrl.todosList).toEqual([]);
		$httpBackend.flush();

		ctrl.sevSelectedUse = '2';
		ctrl.newTask = 'brand new test task5';
		ctrl.newTaskForm = {$invalid : false};
		

		var newTodo = {severity: '2', task: 'brand new test task5', isCompleted: false};
		$httpBackend.expectPOST('/todos', newTodo).respond(201, 
				{_id: '5', severity: '2', task: 'brand new test task5', isCompleted: true}
			);
		
		ctrl.addTask();
		$httpBackend.flush();

		expect(ctrl.todosList).toEqual([
					{_id: '1', severity: '1', task: 'brand new test task1', isCompleted: false}, 
					{_id: '2', severity: '2', task: 'brand new test task2', isCompleted: true},
					{_id: '3', severity: '3', task: 'brand new test task3', isCompleted: false},
					{_id: '4', severity: '3', task: 'brand new test task4', isCompleted: true},
		/*new*/		{_id: '5', severity: '2', task: 'brand new test task5', isCompleted: true}
				]);		
	});


	it('should delete task', function() {
		//jasmine.addCustomEqualityTester(angular.equals);
		expect(ctrl.todosList).toEqual([]);
		$httpBackend.flush();
	
		//$httpBackend.expectPOST('/todos', newTodo).respond(201, '');
		var taskToDelete = {_id: '2', severity: '2', task: 'brand new test task2', isCompleted: true};
		var taskIdToDelete = '2';
		$httpBackend.expectDELETE('/todos/' + taskIdToDelete).respond({});

		ctrl.deleteTask(taskToDelete,taskIdToDelete);
		//var status = ctrl.addTask();
		//expect(status).toBe(null);
		
		expect(ctrl.todosList).toEqual([
					{_id: '1', severity: '1', task: 'brand new test task1', isCompleted: false}, 
					{_id: '3', severity: '3', task: 'brand new test task3', isCompleted: false},
					{_id: '4', severity: '3', task: 'brand new test task4', isCompleted: true}				
				]);
	});


	it('should shange task status', function() {
		expect(ctrl.todosList).toEqual([]);
		$httpBackend.flush();
		
		var taskIdToUpd = '3';
		var taskToUpd = {_id: '3', severity: '3', task: 'brand new test task3', isCompleted: false};

		$httpBackend.expectPUT('/todos/'+taskIdToUpd, taskToUpd).respond(201, '');

		var prevStatus = taskToUpd.isCompleted;
		ctrl.changeStatus(taskToUpd);
		$httpBackend.flush();
		expect(taskToUpd.isCompleted).not.toEqual(prevStatus);
	});


	afterEach(function() {
		$httpBackend.verifyNoOutstandingRequest(); //нет ожидающих исходящих запросов с клиентской стороны
		$httpBackend.verifyNoOutstandingExpectation();//отсутствие несработавших ожиданий запросов на серверной стороне.
	});

});


