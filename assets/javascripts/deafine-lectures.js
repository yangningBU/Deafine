Deafine = angular.module("Deafine.lectures",[]);

Deafine.controller("LecturesController",function($scope,$http,$dialogs){
	$scope.selectedIndex = 0;
	$scope.lectures = [0];
	$http.get('data/lectures.json')
		.success(function(data, status, headers, config) {
	    	$scope.lectures = data;
	    })
	    .error(function(data, status, headers, config) {
	    	alert("Error in GET data/lectures.json: "+data); 
	    });
	$scope.activeLecture = $scope.lectures[$scope.selectedIndex];
	$scope.updateActiveLecture = function(ind){
		//$scope.selectedIndex = ind;
		//$scope.activeLecture = $scope.lectures[$scope.selectedIndex];
	}
	
	$scope.openLecture = function(ind){
		$scope.selectedIndex = ind;
		dlg = $dialogs.notify('You\'ve opened a lecture!','<p>Index = '+ind+'</p>');
	}
	


});


/*var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

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
};*/