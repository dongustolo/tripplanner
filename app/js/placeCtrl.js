tripPlannerApp.controller('placeCtrl', function($scope, $http, CommonProp, $firebaseArray, $firebaseObject, $location, $routeParams, Trip){
	
	$scope.username = CommonProp.getUser();

	if(!$scope.username){
		$location.path('/home');
	}

    
	Trip.PlaceId($routeParams.placeId).then(function(data){

		$scope.place  = data;
		
		$scope.name = data.response.venue.name;
		$scope.id = data.response.venue.id;
		$scope.address = (data.response.venue.bestPhoto.address==null) ? "" :  data.response.venue.location.address;
		
		$scope.prefix = (data.response.venue.bestPhoto.prefix==null) ? "" : data.response.venue.bestPhoto.prefix;
		$scope.suffix = (data.response.venue.bestPhoto.suffix==null) ? "" :  data.response.venue.bestPhoto.suffix;


	});
	
	
	var ref = firebase.database().ref().child('Places');
	$scope.places = $firebaseArray(ref);
	
	
	$scope.addActivity = function(){
		var name = $scope.name;
		var id = $scope.id;
		var mail = $scope.username ;
		var address = $scope.address ;
		var prefix = $scope.prefix ;
		var suffix = $scope.suffix ;
		$scope.places.$add({
			name: name,
			id: id,
			user: mail,
			address: address,
			prefix: prefix,
			suffix: suffix
		}).then(function(ref){
			$scope.success = true;
			window.setTimeout(function() {
				$scope.$apply(function(){
					$scope.success = false;
				});
			}, 2000);
		}, function(error){
			console.log(error);
		});
	};

	
	
	$scope.logout = function(){
		CommonProp.logoutUser();
	}
	
	
});