'use strict';

// Declare app level module which depends on views, and components
var tripPlannerApp = angular.module('webApp', [
  'ngRoute',
  'ngResource',
  'firebase',
  'webApp.home',
  'webApp.register'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.
		when('/welcome',{
		templateUrl: 'partials/search.html',
		controller: 'WelcomeCtrl'
	}).
	when('/dish/:dishId', {
        templateUrl: 'partials/dish.html',
        controller: 'DishCtrl'
     }).
	when('/place/:placeId', {
		templateUrl: 'partials/place.html',
		controller: 'placeCtrl'
	}).
	when('/addPost', {
		templateUrl: 'addPost/addPost.html',
		controller: 'AddPostCtrl'
	}).
	otherwise({redirectTo: '/home'});
}]);
