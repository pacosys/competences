
(function(){
var app = angular.module('todoList',['ngAnimate']);

	app.directive('preventDefault', function() {
		return function(scope, element, attrs) {
			angular.element(element).bind('click', function(event) {
				event.preventDefault();
				event.stopPropagation();
			});
		}
	});
	app.controller('todoListController',function(){
		this.array = [];
		this.newItem = "";
		this.add = function(){
			this.array.push(this.newItem);
		};
		this.remove = function(index){
			this.array.splice(index,1);
		}
	});
})();
