tripPlannerApp.factory('Trip',function ($resource, $http) {
	
	var selectedPlaces = [];
	var selectedPlacesIds = [];
  
	this.PlaceSearch = $resource('https://api.foursquare.com/v2/venues/search',{},{
	  get: {
		  headers: { },
		  params:{ categoryId:'4bf58dd8d48988d1e2941735',limit:'18',near:'Rio de Janeiro',oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'}
	  }
	});

	// $resource method. I prefer to use the $http version
	/* this.PlaceId = $resource('https://api.foursquare.com/v2/venues/:id',{},{
	  get: {
		  headers: { },
		  params:{oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'}

	  }
	}); */
	
	this.PlaceId = function(id) {
      var params = {
          url: "https://api.foursquare.com/v2/venues/" + id ,
          headers: { },
		  params:{oauth_token:'MMQS314RF13CC5N0OO4W3CFJ0BQL24ZB10D1XZHZUTJBXOTV', v:'20170416'}
      };
      return $http(params).then(function(response){
        return response.data;
      });
  }


	
	return this;
})
