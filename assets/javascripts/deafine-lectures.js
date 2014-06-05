angular.module("Deafine.lectures",["Deafine.services"])
.controller("LecturesController",function($scope,$http,LectureAPIService){
	$scope.loadingPage = 1;
	$scope.selectedIndex = 0;
	$scope.lectures = [];
	$http.get('data/lectures.json')
		.success(function(data, status, headers, config) {
	    	$scope.lectures = data;
	    	LectureAPIService.storeLectures($scope.lectures);
	    	$scope.loadingPage--;
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
		$scope.goTo("/lectures/"+ind);
	}
	
	$scope.updateActiveLecture($scope.selectedIndex);

});