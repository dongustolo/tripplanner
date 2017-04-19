tripPlannerApp.controller('placeCtrl', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location, $routeParams, Trip){
	
	$scope.addActivity = function(place){
		Trip.addActivitytoList(place);
		console.log("entre");
	};

	$scope.place  = Trip.PlaceId.get({id:$routeParams.placeId});
	
	
});