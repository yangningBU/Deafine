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
			$http({
		        method  : 'POST',
		        url     : 'fetchUser.php',
		        data    : $.param($scope.formData),  // pass in data as strings
		        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
		        // set the headers so angular passing info as form data (not request payload)
		    })
		        .success(function(data) {
		            console.log(data);
		
		            if (!data.success) {
		            	// if not successful, bind errors to error variables
		                $scope.errorUsername = data.errors.username;
		                $scope.errorPasscode = data.errors.passcode;
		            } else {
		            	// if successful, bind success message to message
							var message = "<p>Current Users:</p><ul>";
							var messageArray = data.message.split(",");
							for(var i=0; i<messageArray.length; i++){
								message += "<li>"+messageArray[i]+"</li>";
							}
							message += "</ul>";
							//$('#messages').addClass('alert alert-success').append(message);
							$scope.message = data.message.split(" :: ");
		            }
		        })
		        .error(function(data){
		        	console.log(data);
		        	var temp = data; var sub;
		        	var ind1 = ~temp.indexOf("<title>");
		        	var ind2 = ~temp.indexOf("</title>");
		        	if(ind1){
		        		ind1 = ~ind1;
			        	temp = temp.substring(ind1, ~ind2);
		        	}
		        	$scope.message = "Error "+temp.match(/\d{3}/g).toString(); 
		        	//RegEx means that it's looking for any digit that's exacty 3 characters long
		        });
		}else{
			$scope.errorUsername = "Username cannot be empty.";
		    $scope.errorPasscode = "Passcode cannot be empty.";
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
			$log.info('Modal dismissed at: ' + new Date());
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
Deafine.controller('LecturesController',function($scope, $http) {
	$scope.flankingItems = {number:2};
	$scope.lectureCarousel = $('#lectures').waterwheelCarousel({
		flankingItems: 2
	});
});