'use strict';

angular
	.module('mainPage')
	.component('mainPage', {
		templateUrl: 'client/mainpage/mainPage.template.html',
		controller: ['mainPageFactory','$interval', function(mainPageFactory, $interval){
			var self = this;

			self.date = new Date();
			self.openTaskStatusLine = '';


			// load all tasks
			mainPageFactory.todoGetAll().success(function(data) {
				self.getOpenTodo(data);
				if (self.openCount>1) {
					self.openTaskStatusLine = 'There are ' + self.openCount + ' currently open tasks'
				} else {
					self.openTaskStatusLine = 'There is ' + self.openCount + ' currently open task'
				}

				getTime();

			});

			$interval(getTime, 1000)

			function getTime(){
				self.time = new Date();
			}

			self.getOpenTodo = function(data){
				self.openCount = 0;
				data.forEach(function(item){
					if (!item.isCompleted) {
						self.openCount++;
					}
				});
			};

		}]
	});