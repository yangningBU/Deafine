Deafine = angular.module("Deafine.join",[]);

Deafine.controller('JoinController',function($scope, $http, $location) {

	// create a blank object to hold our form information
	// $scope will allow this to pass between controller and view
	$scope.attemptedUser = {};
	$scope.attemptedUser.email = "";
	$scope.attemptedUser.code = "";
	$scope.validIRB = false;
	$scope.codeStatus = {};
	$scope.codeStatus.success = false;
	$scope.codeStatus.message = "";

	
	$scope.preValidate = function(type){
		var prevalid = true;
		if(prevalid){
			$scope.validateIRB();
		}
	};
	
	$scope.attemptedUser = {};
	$scope.attemptedUser.email = "";
	$scope.attemptedUser.code = "";
	
	
	// Verify IRB
	$scope.validateIRB = function(){
		/*if($scope.attemptedUser.IRBcode.toUpperCase() === "CODE"){
			$scope.goTo("/background");
		}*/
		$scope.attemptedUser.timestamp = new Date();
		$http({
	        method  : 'POST',
	        url     : 'getIRB.php',
	        data	:	$.param($scope.attemptedUser),
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
	        // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
        	if(data.success){
        		$scope.codeStatus.message = "getIRB was entirely successful: " + data.message;
        	}else{
	        	$scope.codeStatus.message = "getIRB was successful but, " + data.message;
        	}
			//$scope.goTo("/background"); <-- Do After you figure out service issue
			// HAVE SOME SERVICE TO TRANSFER ATTEMPTED UESR DATA TO JOIN CONTROLLER
        })
        .error(function(data){
        	$scope.codeStatus.message = "PHP Error: "+data;
        });
	};
	

	
});