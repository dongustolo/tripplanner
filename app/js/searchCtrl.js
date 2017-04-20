

tripPlannerApp.controller('searchCtrl', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location, Trip){
	$scope.username = CommonProp.getUser();

	if(!$scope.username){
		$location.path('/home');
	}
	console.log("aqui");
	
	$scope.lugares = Trip.PlaceSearch.get({});
	
	$scope.searchPlaces = function(query, category) {
		$scope.status = "Searching...";
		Trip.PlaceSearch.get({query:query, categoryId:category},function(data){
			$scope.lugares=data;
			//$scope.status = "Showing " + data.results.length + " results";
			$scope.status = "";
		},function(data){
		$scope.status = "There was an error";
		});
	}; 
	
	var ref = firebase.database().ref().child('Articles');
	$scope.articles = $firebaseArray(ref);	

	$scope.editPost = function(id){
		var ref = firebase.database().ref().child('Articles/' + id);
		$scope.editPostData = $firebaseObject(ref);
	};

	$scope.updatePost = function(id){
		var ref = firebase.database().ref().child('Articles/' + id);
		ref.update({
			title: $scope.editPostData.title,
			post: $scope.editPostData.post
		}).then(function(ref){
			$scope.$apply(function(){
				$("#editModal").modal('hide');
			});
		}, function(error){
			console.log(error);
		});
	};

	$scope.deleteCnf = function(article){
		$scope.deleteArticle = article;
	};

	$scope.deletePost = function(deleteArticle){
		$scope.articles.$remove(deleteArticle);
		$("#deleteModal").modal('hide');
	};

	$scope.logout = function(){
		CommonProp.logoutUser();
	}
});