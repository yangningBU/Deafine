Deafine = angular.module("Deafine.background.check",[]);

Deafine.controller('BackgroundCheckController',function($scope, $http, $location) {

	// create a blank object to hold our form information
	// $scope will allow this to pass between controller and view
	$scope.formData = {};
	$scope.formData.username = "";
	$scope.formData.passcode = "";
	$scope.validIRB = false;

	
	$scope.preValidate = function(type){
		var prevalid = true;
		if(prevalid){
			alert("background check complete");
		}
	};


});