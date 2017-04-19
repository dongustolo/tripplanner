tripPlannerApp.factory('Trip',function ($resource) {
	
	var selectedPlaces = [];
	var selectedPlacesIds = [];
  
	this.PlaceSearch = $resource('https://api.foursquare.com/v2/venues/search',{},{
	  get: {
		  headers: { },
		  params:{ categoryId:'4bf58dd8d48988d1e2941735',limit:'12',near:'Rio de Janeiro',oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'}
	  }
	});

	this.PlaceId = $resource('https://api.foursquare.com/v2/venues/:id',{},{
	  get: {
		  headers: { },
		  params:{oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'}

	  }
	});
	
	this.getActivitiesList = function(){
      return selectedPlaces;
    }
	
	this.addActivitytoList = function(place) {

		selectedPlaces.push(place);
        console.log(selectedPlaces);
/*         selectedDishesIds = [];
		for (var j = 0; j < selectedDishes.length; j++) {
			//console.log(selectedDishes[j]);
			selectedDishesIds.push(selectedDishes[j].id);
		}
		$cookieStore.put('selectedDishesIds', selectedDishesIds); */
        //console.log(selectedDishesIds);
        //console.log($cookieStore.get('selectedDishesIds'));

	};
	
	return this;
})
