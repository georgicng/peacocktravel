angular.module('Services', [])
    .factory('APIService', ['$http', '$window', function($http, $window) {
        var getFlights = function(query) {
            var p = new Promise(
                // The resolver function is called with the ability to resolve or
                // reject the promise
                function(resolve, reject) {
                    
                    $window.client.default.Flight_Low_Fare_Search(query, function(success) {
                            console.log(success.obj);
                            resolve(success.obj.results);
                        },
                        function(error) {
                            console.log(error);
                            reject(error);
                        });
                }
            );
            return p;
        }

        var getHotels = function(query) {
            var p = new Promise(
                // The resolver function is called with the ability to resolve or
                // reject the promise
                function(resolve, reject) {
                    
                    $window.client.default.Hotel_Airport_Search(query, function(success) {
                            console.log(success.obj);
                            resolve(success.obj.results);
                        },
                        function(error) {
                            console.log(error);
                            reject(error);
                        });
                }
            );
            return p;
        }
        return { client: $window.client, getFlights: getFlights, getHotels: getHotels };

    }])
    .factory('StoreService', function($http) {

        return {};

    })
	.factory('_', ['$window', function($window) {
        return $window._;
      }
    ])
    .factory('Helper', function($window, _, StoreService, moment) {
        function getTime(datetime){
        	return moment(datetime).format("hh:mm:ss a");

        }

        function getDate(datetime){
        	return moment(datetime).format('YY-mm-d');
        }

        function getDuration(depature_date, arrival_date){     		
			var start = moment(depature_date); //todays date
			var end = moment(arrival_date); // another date
			return moment.duration(end.diff(start)).asHours();
        }

        function getAirport(code){
        	console.log(code);
        	var x = StoreService.airports[code.toUpperCase()];
        	console.log(x);
        	return x.name;
        }

        function getCity(code){
        	return StoreService.airports[code].city;
        }

        function getCountry(code){
        	return StoreService.airports[code].country;
        }

        /*  Passed to function:                                                    :::
            lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  
            lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  
            unit = the unit you desire for results                               
               where: 'M' is statute miles (default)                         
                'K' is kilometers                                     
                  'N' is nautical miles   */                           

        function getDistance(lat1, lon1, lat2, lon2, unit) {
            var radlat1 = Math.PI * lat1/180
            var radlat2 = Math.PI * lat2/180
            var theta = lon1-lon2
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI
            dist = dist * 60 * 1.1515
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist
        }

        return {
        	getCity: getCity,
        	getAirport: getAirport,
        	getDuration: getDuration,
        	getDate: getDate,
        	getTime: getTime,
        	getCountry: getCountry,
            getDistance: getDistance
        };
      });


    
