angular.module("Deafine.terms",["Deafine.services"])
.controller("LectureController",function($scope,$http,$routeParams,LectureAPIService){
	$scope.loadingPage = 1;
	$scope.questions=["I like this sign","This sign makes sense..."];
	$scope.ratings = [{symbol:":(",value:"-2"},{symbol:":\\",value:"-1"},{symbol:":|",value:"0"},{symbol:":/",value:"1"},{symbol:":)",value:"2"}];

	$scope.selected = {
		term: null,
		termIndex: null,
		termRatings: new Array($scope.questions.length),
		lecture: LectureAPIService.getActiveLecture(),
		lectureIndex: parseInt($routeParams.id)
	}
	

	$scope.terms = [];
	$scope.showingLecture = true;
	
	$http.get('data/terms.json')
		.success(function(data, status, headers, config) {
	    	$scope.terms = data;
	    	LectureAPIService.storeTerms($scope.terms);
	    	$scope.loadingPage--;
	    })
	    .error(function(data, status, headers, config) {
	    	alert("Error in GET data/lectures.json: "+data); 
	    });
	
	$scope.goBack = function(){
		$scope.goTo("/lectures");
	}
	$scope.updateActiveTerm = function(ind){
		$scope.selected.termIndex = ind;
		$scope.selected.term = $scope.terms[ind];
		LectureAPIService.setActiveTerm($scope.selected.termIndex);
		
		$scope.showingLecture = false;
	}
	$scope.updateToShowLecture = function(){
		$scope.showingLecture = true;
	}
	$scope.showTerm = function(ind){
		alert($scope.terms[ind].path);
	}

});