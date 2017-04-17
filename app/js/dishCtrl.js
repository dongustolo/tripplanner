// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {

  //$scope.idDish = $routeParams.dishId;
  //$scope.testeo = "Hola";

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  };

  $scope.getPrecioDish = function() {
    return Dinner.getDishPrice($routeParams.dishId);

  };

  $scope.confirmDish = function(dish){
    Dinner.addDishToMenu(dish);
  };

  $scope.testeo  = Dinner.Dish.get({id:$routeParams.dishId});




  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

});
