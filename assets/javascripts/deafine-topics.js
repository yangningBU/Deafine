angular.module("Deafine.topics",[])
.controller('TopicsController',function($scope, $http) {
	$scope.flankingItems = {number:2};
	$scope.lectureCarousel = $('#lectures').waterwheelCarousel({
		flankingItems: 3,
		keyboardNav: true //using the arrow keys to navigate
	});
});