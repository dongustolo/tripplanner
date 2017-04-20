tripPlannerApp.controller('tripCtrl', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location, Trip){
	$scope.username = CommonProp.getUser();

	if(!$scope.username){
		$location.path('/home');
	}

	
	var ref = firebase.database().ref("Places");
	var ref2 = ref.orderByChild("user").equalTo($scope.username);
		
	$scope.getActivities = $firebaseArray(ref2);


	$scope.deletePlace = function(place){
		$scope.getActivities.$remove(place);
	};
	
	$scope.logout = function(){
		CommonProp.logoutUser();
	}
	
});