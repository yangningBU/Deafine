// define angular module/app
Deafine = angular.module('Deafine', ["ngRoute", "ui.bootstrap", 'dialogs.main','pascalprecht.translate', "Deafine.services", "Deafine.directives", "Deafine.signin", "Deafine.lectures", "Deafine.terms", "Deafine.join"]);
// 'pascalprecht.translate' is for the 'dialogs.main' module that I got off the web.
// These are for the popup module shown in the 'Forgot Username' link on the sign-in page

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
    $locationProvider.html5Mode(false); // don't remember what this is for
    $locationProvider.hashPrefix('!'); //optional, keeping the .index.html/#!
    
});
Deafine.controller('AppController',function($scope, $http, $location) {
	$scope.usingEnglish = true;	
	$scope.showingSignInPage = true;
	$scope.navbarIsCollapsed = true;
	
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
	
	// I started to create a session user but didn't get very far. Right now I'm using the .username between views
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
