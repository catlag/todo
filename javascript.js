// sort by completed or not
// edit on doubble click
	




var app = angular.module('todoApp', ['ui.sortable', 'LocalStorageModule'])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
	.controller('TodoCtrl',['$scope','localStorageService','$filter',
	 function($scope, localStorageService, $filter){


		var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);


    $scope.todoSortable = {
    containment : "parent",//Dont let the user drag outside the parent
    cursor : "move",//Change the cursor icon on drag
    tolerance : "pointer"//Read http://api.jqueryui.com/sortable/#option-tolerance
    };

		$scope.addTodo = function(){
			$scope.todo.editing = false;
			$scope.todo.isDone = false;
			$scope.todos.push($scope.todo);
			console.log($scope.todo);
			$scope.todo = '';

		};

		$scope.doneTodo = function(todo){
			
			if(todo.isDone === false){
				todo.isDone = true;
				console.log(todo);
			} else {
				todo.isDone = false;
				console.log(todo);
			}

		};

		$scope.deleteTodo = function(index){
			$scope.todos.splice(index,1);

		};

		$scope.clearTodo = function(){
			$scope.todos = [];
		};

		$scope.edit = function(){
			console.log("hello!");
		};

	 $scope.editTodo = function (todo) {
	 	console.log("Editing");
        todo.editing = true;
    };

    $scope.doneEditing = function (todo) {
    	var found = $filter('getByEditable')($scope.todos);
    	found.name = todo.name;
      todo.editing = false;

    };
}]);

$('#clear').confirmation(options);







