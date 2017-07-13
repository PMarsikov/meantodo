//https://rav.pw/httpbackend-when-vs-expect/
// https://rav.pw/unit-testing-angularjs-applications/

'use strict';



describe('Component ', function() {
	//
	var $httpBackend, todoListFactory, ctrl, $scope;

	beforeEach(module('todoList'));
	//beforeEach(inject(['todoListFactory']));
	beforeEach(inject(function($componentController, _$httpBackend_,_todoListFactory_) {
		//ctrl = $componentController('todoList');



//            $scope = $rootScope.$new();
            //ctrl = $componentController('todoList', {$scope: $scope});
            
            var bindings = {todosList : []};
		ctrl = $componentController('todoList', null, bindings );



		$httpBackend = _$httpBackend_;
		todoListFactory = _todoListFactory_;
	}));

	//todosList = [];

/*	    it('should have an empty tasks array', function() {
            expect($scope.todosList).toEqual([]);
        });*/


	it('ddddd', function() {
		//

		var task = {
			isCompleted : true,
			severity : "1",
			task : "AAA SSS3"
		};

		
/*
		$scope.newTodo = {
			isCompleted : true,
			severity : "1",
			task : "AAA SSS3"
		};
		
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

*/


/*
		$httpBackend.expectPOST('/todos', {
			//task: {
				isCompleted : true,
				severity : "1",
				task : "AAA SSS3"
			//}
		});
*/

//            $httpBackend.expectGET('/todos');

		ctrl.addTask();


	$httpBackend.whenGET('/todos').respond([]);
	/**/
    $httpBackend.whenPOST('/todos').respond({
    			isCompleted : true,
				severity : "1",
				task : "AAA SSS3"
			});


	//todoListFactory.todoAddTodo(task);
	$httpBackend.flush();


	});



});
/*
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
/-*
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

*-/
			ctrl = $componentController('todoList');
			//expect(ctrl).toBeDefined();
		}));

		it('Check severity array', function() {
			expect(ctrl.sev.length).toBe(4);
		});
		

		it('Check severity array', function() {
			jasmine.addCustomEqualityTester(angular.equals);
			//expect(ctrl.todosList).toEqual([]);
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
*/
