angular.module('Flights', [])
.controller('FlightSearchCtrl', function($scope, $state, StoreService, Helper) {
    $scope.flight = StoreService.flightQuery; 
    console.log(StoreService.airports);
    $scope.getAirport = Helper.getAirport;  

    $scope.adjustValue = function(increment, counter) {
         switch (counter) {
            case "adults":
                    if ($scope.flight.adults <= 0 && increment == -1) {} else {
                    $scope.flight.adults = $scope.flight.adults + increment;
                }
                break;

            case "children":
                if ($scope.flight.children <= 0 && increment == -1) {} else {
                    $scope.flight.children = $scope.flight.children + increment;
                }
                break;

            case "infants":
                if ($scope.flight.infants <= 0 && increment == -1) {} else {
                    $scope.flight.infants = $scope.flight.infants + increment;
                }
                break;

        }
    }

    $scope.submit = function(flight) {
        StoreService.flightQuery = flight;
        $state.go('Flights');
    }; 

})
.controller('FlightResultsCtrl', function($scope, StoreService, APIService, Helper) {
    $scope.query = StoreService.flightQuery;
    $scope.loading = true;
    $scope.error = false;
    $scope.helper= Helper;
    APIService.getFlights($scope.query)
        .then(function(results) {
            $scope.items = results;
            $scope.loading = false;
            $scope.$apply();
        })
        .catch(function(error) {
          console.log('Oops!  failed with message: ' + error);
          $scope.error = true;          
          $scope.loading = false;
          $scope.$apply();
        });

});
