angular.module('Hotels', [])
.controller('HotelSearchCtrl', function($scope, $state, StoreService, Helper){
	$scope.hotel = StoreService.hotelQuery; 
   
    $scope.submit = function(hotel) {
        StoreService.hotelQuery = hotel;
        $state.go('Hotels');
    }; 

})
.controller('HotelResultsCtrl', function($scope, StoreService, APIService, Helper){
	$scope.query = StoreService.hotelQuery;
    $scope.loading = true;
    $scope.error = false;
    $scope.helper= Helper;
    APIService.getHotels($scope.query)
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