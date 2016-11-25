angular.module('cmtApp', ['ui.router', 'appRoutes', 'ngLoadingOverlay', 'MainCtrl', 'Hotels', 'Flights', 'Services', 'angularMoment'])
    .run(function($http, StoreService) {
    	$http.get('/data/airports.json')
            .then(function(res) {
                StoreService.airports = res.data;
            })
            .catch(function(err) {
                console.log(err);
            }); 
        StoreService.flightQuery = { origin: 'LOS', destination: 'NYC', departure_date: '2016-12-01', return_date: '2016-12-03', travel_class: 'Economy', adults: 1, children: 0, infants: 0, apikey: '3eLtLeXfSEWb1Anh2DwLHbk8UtZnJ5gt', number_of_results: 10 };
        StoreService.hotelQuery = { location: 'LOS', check_in: '2016-12-01', check_out: '2016-12-03', max_rate: 200, apikey: '3eLtLeXfSEWb1Anh2DwLHbk8UtZnJ5gt', number_of_results: 10 };
        StoreService.results = [{
            "itineraries": [{
                "outbound": {
                    "flights": [{
                        "departs_at": "2016-11-25T17:55",
                        "arrives_at": "2016-11-26T05:10",
                        "origin": {
                            "airport": "BOS",
                            "terminal": "E"
                        },
                        "destination": {
                            "airport": "LHR",
                            "terminal": "5"
                        },
                        "marketing_airline": "EI",
                        "operating_airline": "EI",
                        "flight_number": "8912",
                        "aircraft": "744",
                        "booking_info": {
                            "travel_class": "ECONOMY",
                            "booking_code": "Y",
                            "seats_remaining": 9
                        }
                    }]
                }
            }],
            "fare": {
                "total_price": "5201.90",
                "price_per_adult": {
                    "total_fare": "5201.90",
                    "tax": "27.90"
                },
                "restrictions": {
                    "refundable": true,
                    "change_penalties": false
                }
            }
        }];
    });
