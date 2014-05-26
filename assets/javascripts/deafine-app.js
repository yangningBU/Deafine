// define angular module/app
Deafine = angular.module('Deafine', ["ui.bootstrap","Deafine.controllers","Deafine.services"]);

Deafine.config(function($routeProvider,$locationProvider) { 
	//$locationProvider.html5Mode(false);
    //$locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
        templateUrl: 'partials/signin.html' //'partials/signin.html'
    });
    $routeProvider.when('/join', {
        templateUrl: 'partials/join.html'
    });
    $routeProvider.when('/background', {
        templateUrl: 'partials/backgroundcheck.html'
    });
    $routeProvider.when('/forgot/username', {
        template: '<div>HAHA You forgot your username!</div>'
    });
    $routeProvider.when('/forgot/passcode', {
        template: '<div>HAHA You forgot your passcode!</div>'
    });
    $routeProvider.when('/vet', {
        templateUrl: 'partials/vet.html'
    });
    $routeProvider.when('/home', {
	    templateUrl: 'partials/homepage.html'
    });
    $routeProvider.otherwise({
        redirectTo: "/"
    });
    
});
Deafine.directive("brand",function($scope){ // DOESNT WORK RIGHT NOW
	return{
		restrict: "E",
		//transclude: true,
		template: '<div class="page-footer brand"><h3><span class="glyphicon glyphicon-book"></span> Project&nbsp;Deafine</h3></div>'
	}
});
Deafine.controller('AppController',function($scope, $http, $location) {
	
	// Updating the View
	$scope.goTo = function(path){
		$location.path(path);
	};
	
	$scope.currentUser = {
		isSignedIn : false,
		email: "",
		username : "",
		IRBcode : ""
	};
	
	$scope.showingSignin = true;

});
