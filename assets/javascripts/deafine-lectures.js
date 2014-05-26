Deafine = angular.module("Deafine.lectures",[]);

Deafine.controller("LecturesController",function($scope,$http){
	$scope.selectedIndex = 0;
	$scope.lectures = [0];
	$http.get('data/lectures.json')
		.success(function(data, status, headers, config) {
	    	$scope.lectures = data.data;
	    })
	    .error(function(data, status, headers, config) {
	    	alert("Error in GET data/lectures.json: "+data); 
	    });
	$scope.activeLecture = $scope.lectures[$scope.selectedIndex];
	$scope.updateActiveLecture = function(ind){
		//$scope.selectedIndex = ind;
		//$scope.activeLecture = $scope.lectures[$scope.selectedIndex];
	}
	
	$scope.openModal = function (ind) {
		$scope.selectedIndex = ind;
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
	


});


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