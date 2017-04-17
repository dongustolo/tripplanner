// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests2 = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  };

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  };

  $scope.getMenu = Dinner.getDishesMenu();

  $scope.dishPrice = function(dish){
    return Dinner.getDishPrice(dish);
  };

  $scope.menuPricefinal = Dinner.getTotalMenuPrice();

  $scope.deleteDish = function(id){
    return Dinner.removeDishFromMenu(id);
  };




  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
