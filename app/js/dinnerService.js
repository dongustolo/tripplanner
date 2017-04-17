// Here ssssss111we create an Angular service that we will use for our
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

  //var numberOfGuest = 2;
  var selectedDishes = [];
  var selectedDishesIds = [];

console.log($cookieStore.get('selectedDishesIds'));
console.log(selectedDishes);
console.log(selectedDishesIds);

this.DishSearch = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',{},{
      get: {
          headers: {
              'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
          }
      }
  });
  this.Dish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information',{},{
      get: {
          headers: {
              'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
          }
      }
  });

if ($cookieStore.get('selectedDishesIds')) {
        selectedDishesIds = $cookieStore.get('selectedDishesIds');
        console.log(selectedDishesIds);
        for (var i = 0; i < selectedDishesIds.length; i++) {
            this.Dish.get({id:selectedDishesIds[i]},function(data){
                selectedDishes.push(data);
            }, function (data) {

            });
        }
}




  if ($cookieStore.get('numberOfGuest')) {
        this.numberOfGuest = $cookieStore.get('numberOfGuest');
    } else {
        this.numberOfGuest = 2;
    }



  this.setNumberOfGuests = function(num) {
    $cookieStore.put('numberOfGuest', num);
  };

  this.getNumberOfGuests = function() {
    this.numberOfGuest = $cookieStore.get('numberOfGuest');
      return this.numberOfGuest;
  };



    //this.getDishPrice = function(dish) {
    //  plato=this.Dish.get({id:dish});
    //  var price = 0;
    //    plato.extendedIngredients.forEach(function(ingredient){
    //      price += ingredient.amount * 1;
    //    });
    //  return price;
    //};

    this.getDishPrice = function(dish) {
      var price = 0;
        dish.extendedIngredients.forEach(function(ingredient){
          price += ingredient.amount;
        });
      return price;
      };

    this.getDishesMenu = function(){
      return selectedDishes;
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {
        for (var i = 0; i < selectedDishes.length; i++){
            if(selectedDishes[i].id === id){
                selectedDishes.splice(i, 1);
                console.log($cookieStore.get('selectedDishesIds'));
                console.log(selectedDishes);
                console.log(selectedDishesIds);
            }
        }
        selectedDishesIds = [];
				
    };


  this.getTotalMenuPrice = function() {
    var menuPrice = 0;
    this.getAllIngredients().forEach(function(ingredient) {
        menuPrice += ingredient.amount;
    });
    return menuPrice;
};


//Returns all ingredients for all the dishes on the menu.
this.getAllIngredients = function(){
      var ingredientsList = [];
    selectedDishes.forEach(
      function(dish){
        dish.extendedIngredients.forEach(function(ingredient){
        ingredientsList.push(ingredient);
      });
    });
    return ingredientsList;
};


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes)
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details


  this.addDishToMenu = function(dish) {

				selectedDishes.push(dish);
        //console.log(selectedDishes);
        selectedDishesIds = [];
				for (var j = 0; j < selectedDishes.length; j++) {
					//console.log(selectedDishes[j]);
					selectedDishesIds.push(selectedDishes[j].id);
				}
				$cookieStore.put('selectedDishesIds', selectedDishesIds);
        console.log(selectedDishesIds);
        console.log($cookieStore.get('selectedDishesIds'));

			};





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
