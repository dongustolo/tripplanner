

// Declare app level module which depends on views, and components
var tripPlannerApp = angular.module('webApp', [
  'ngRoute',
  'ngResource',
  'firebase'  
]);
tripPlannerApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).
	when('/welcome',{
		templateUrl: 'partials/search.html',
		controller: 'searchCtrl'
	}).
	when('/place/:placeId', {
		templateUrl: 'partials/place.html',
		controller: 'placeCtrl'
	}).
	when('/register', {
		templateUrl: 'partials/register.html',
		controller: 'RegisterCtrl'
	}).
	when('/activities', {
		templateUrl: 'partials/activities.html',
		controller: 'tripCtrl'
	})
  .otherwise({redirectTo: '/home'});
}]);
