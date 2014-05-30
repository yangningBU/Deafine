angular.module("Deafine.lectures",["Deafine.services"])
.controller("LecturesController",function($scope,$http,$dialogs,LectureAPIService){
	$scope.selectedIndex = 0;
	$scope.lectures = [];
	$http.get('data/lectures.json')
		.success(function(data, status, headers, config) {
	    	$scope.lectures = data;
	    	LectureAPIService.storeLectures($scope.lectures);
	    })
	    .error(function(data, status, headers, config) {
	    	alert("Error in GET data/lectures.json: "+data); 
	    });
	
	$scope.updateActiveLecture = function(ind){
		$scope.selectedIndex = ind;
		LectureAPIService.setActiveLecture($scope.selectedIndex);
	}
	
	$scope.openLecture = function(ind){
		$scope.updateActiveLecture(ind);
		//dlg = $dialogs.notify('You\'ve opened a lecture!','<p>Index = '+ind+'</p>');
		$scope.goTo("/lectures/"+ind);
	}
	
	$scope.updateActiveLecture($scope.selectedIndex);

})
.controller("LectureController",function($scope,$routeParams,LectureAPIService){
	$scope.selectedIndex = parseInt($routeParams.id);
	$scope.goBack = function(){
		$scope.goTo("/lectures");
	}
	$scope.lectures = LectureAPIService.getLectures();
	$scope.selectedLecture = $scope.lectures[$scope.selectedIndex];


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