Deafine = angular.module("Deafine.controllers",[]);
var SignInController = function($scope, $http, $location, $modal, $log) {

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
			alert("formData.username,passcode = {"+$scope.formData.username+", "+$scope.formData.passcode+"}");
		} else{
			//alert("why no work?");
		}
	};
	$scope.newuser = function(){
		$http({
		        method  : 'GET',
		        url     : 'join.html',
		        //data    : $.param($scope.formData),  // pass in data as strings
		        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
		        // set the headers so angular passing info as form data (not request payload)
		})
        .success(function(data) {
            console.log(data);
			$('#mainContent').html(data);
			
		});
	};
	
	$scope.items = ['item1', 'item2', 'item3'];
	$scope.selected = "";
	
	$scope.openModal = function () {
	
		var modalInstance = $modal.open({
		  templateUrl: 'partials/forgot-username-password.html',
		  controller: ModalInstanceCtrl,
		  resolve: {
		    items: function () {
		      return $scope.items;
		    }
		  }
		  });
	
		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			alert('Modal dismissed at: ' + new Date());
		});
	};
	


};


var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

};



Deafine.controller('VetController',function($scope, $http, $location) {

	
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

});