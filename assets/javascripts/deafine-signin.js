angular.module("Deafine.signin",['dialogs.main']);
var SignInController = function($scope, $http, $location, dialogs) {

	// create a blank object to hold our form information
	// $scope will allow this to pass between controller and view
	$scope.formData = {};
	$scope.formData.username = "";
	$scope.formData.passcode = "";
		
	$scope.preValidate = function(){
		var test1 = ($scope.formData.username.length > 0);
		var test2 = ($scope.formData.passcode.length > 0);

		if(test1){
			$scope.errorUsername = "";
		}else{
			$scope.errorUsername = "Username cannot be empty.";
		}
		if(test2){
			$scope.errorPasscode = "";
		}else{
			$scope.errorPasscode = "Passcode cannot be empty.";
		}
		return test1 && test2;
	};
	
	$scope.processForm = function() {
		var test = $scope.preValidate();
		if( test ){
			$scope.currentUser.username = $scope.formData.username;
			$scope.goTo('/lectures');
		} else{
			//alert("why no work?");
		}
	};
	
	// The popup/modal 
	$scope.forgotCredentials = function(){
		dlg = dialogs.notify('Lost your way?','<p>Please contact our team at <a href="mailto:buaslstem@gmail.com?subject=Deafine :: Username/Password Request&body=Hello Project Deafine Team, I\'ve lost my login credentials. My name is _______________.">buaslstem@gmail.com</a> to retrieve your username or passcode.</p>');
	}

};