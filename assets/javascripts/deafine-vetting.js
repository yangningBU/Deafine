
var VetController = function($scope, $http, $location) {

	
	$scope.currentLecture = {name:"Geometry",lecturer:"Joe Schmoe"};
	$scope.slides = [
		{eng:"shape"},
		{eng:"line"}
		];
		
	$scope.statements = [
		{}
	];
	$scope.showingResults = false;
	$scope.showingUserEdit = false;

};