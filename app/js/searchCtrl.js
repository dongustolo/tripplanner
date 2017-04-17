// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  //$scope.testeo = Dinner.Dish.get({id:583901});

  $scope.testeo2 = Dinner.DishSearch.get({query:'',type:''});

  $scope.lugares2 = Dinner.PlaceSearch2.get({oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'});

  //$scope.lugares = Dinner.PlaceSearch.get({categoryId:'4bf58dd8d48988d1e2941735',near:'Rio de Janeiro',oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'});

  $scope.searchPlaces = function(category) {
   $scope.status = "Searching...";
   Dinner.PlaceSearch.get({categoryId:category,near:'Rio de Janeiro',limit:'12',oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'},function(data){
     $scope.lugares=data;
     //$scope.status = "Showing " + data.results.length + " results";
   },function(data){
     $scope.status = "There was an error";
   });
 };

  $scope.search = function(query,type) {
   $scope.status = "Searching...";
   Dinner.DishSearch.get({query:query,type:type},function(data){
     $scope.testeo2=data;
     $scope.status = "Showing " + data.results.length + " results";
   },function(data){
     $scope.status = "There was an error";
   });
 };

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

});
