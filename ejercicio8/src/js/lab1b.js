angular.module('lab1b', [])
	      
.controller('lab1bController',function($scope){
	$scope.filtros = ["filter", "currency", "number", "date", "json", "lowercase", "uppercase", "limitTo", "orderBy"];
    $scope.campos = ["input[text]", "input[date]", "input[datetime-local]", "input[time]", "input[week]", "input[month]", "input[number]", "input[url]", "input[email]", "input[radio]", "input[checkbox]"];
})
          