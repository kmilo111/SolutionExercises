angular.module('lab1c', [])
	      
.controller('lab1cController',function($scope){
	 $scope.link_image = "http://placehold.it/350x150";
	 $scope.changeLinkImage = function () {
	 	$scope.link_image == "http://placehold.it/350x150" ? $scope.link_image = "http://placehold.it/140x100" : $scope.link_image = "http://placehold.it/350x150";
	 };
})
          