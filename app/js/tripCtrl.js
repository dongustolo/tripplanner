tripPlannerApp.controller('tripCtrl', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location, Trip){
	
	$scope.getActivities = Trip.getActivitiesList();
	
});