// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  //$scope.testeo = Dinner.Dish.get({id:583901});

  $scope.testeo2 = Dinner.DishSearch.get({query:'',type:''});

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
