// define angular module/app
Deafine = angular.module('Deafine', ["ngRoute", "ngResource", "ngCookies", "ui.bootstrap", 'dialogs.main','pascalprecht.translate', "Deafine.services", "Deafine.signin", "Deafine.topics", "Deafine.lectures", "Deafine.terms", "Deafine.join"]);

Deafine.config(function($routeProvider,$locationProvider) { 
    /*$routeProvider.when('/', {
	    templateUrl: 'partials/lectures.html',
	    controller: "LecturesController"
    });*/
    $routeProvider.when('/', {
        templateUrl: 'partials/signin.html', //'partials/signin.html'
        controller: "SignInController"
    });
    $routeProvider.when('/join', {
        templateUrl: 'partials/join.html',
        controller: "JoinController"
    });
    /*$routeProvider.when('/background', {
        templateUrl: 'partials/backgroundcheck.html'
    });
    $routeProvider.when('/vet', {
        templateUrl: 'partials/vet.html'
    });*/
    $routeProvider.when('/home', {
	    templateUrl: 'partials/topics.html',
	    controller: "TopicsController"
    });
    $routeProvider.when('/lectures', {
	    templateUrl: 'partials/lectures.html',
	    controller: "LecturesController"
    });
    $routeProvider.when('/lectures/:id', {
	    templateUrl: 'partials/lecture.html',
	    controller: 'LectureController'
    });
    $routeProvider.otherwise({
        redirectTo: "/lectures"
    });
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    
});
Deafine.directive("brand",function($scope){ // DOESNT WORK RIGHT NOW
	return{
		restrict: "E",
		//transclude: true,
		template: '<div class="page-footer brand"><h3><span class="glyphicon glyphicon-book"></span> Project&nbsp;Deafine</h3></div>'
	}
});
Deafine.controller('AppController',function($scope, $http, $location) {
	$scope.usingEnglish = true;	
	$scope.showingSignInPage = false;
	$scope.navbarIsCollapsed = false;
	
	$scope.toggleEnglish = function(){
		$scope.usingEnglish = !$scope.usingEnglish;
	}
	$scope.toggleNavbar = function(){
		$scope.navbarIsCollapsed = !$scope.navbarIsCollapsed;
	}
	// Updating the View
	$scope.goTo = function(path){
		//alert("About to go to "+path);
		if(path=="/" || path=="/join"){
			$scope.showingSignInPage = true;
		} else{
			$scope.showingSignInPage = false;
		}
		$location.path(path);
	};
	
	$scope.currentUser = {
		isSignedIn : false,
		email: null,
		username : null,
		lastLectureVetted: null,
		lastTermVetted: null,
		totalLecturesVetted: 0,
		totalTermsVetted: 0
	};


});
