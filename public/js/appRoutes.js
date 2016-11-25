angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'MainCtrl',
            templateUrl: 'views/home.html',
            title: 'Home',
        })
        .state('FlightSearch', {
            url: '/flightsearch',
            controller: 'FlightSearchCtrl',
            templateUrl: 'views/flight-form.html',
            title: 'Find Flights'
        })
        .state('Flights', {
            url: '/flights',
            controller: 'FlightResultsCtrl',
            templateUrl: 'views/flight-list.html',
            title: 'Flights'
        })
        .state('HotelSearch', {
            url: '/hotelsearch',
            controller: 'HotelSearchCtrl',
            templateUrl: 'views/hotel-form.html',
            title: 'find Hotels'
        })
        .state('Hotels', {
            url: '/hotels',
            controller: 'HotelResultsCtrl',
            templateUrl: 'views/hotel-list.html',
            title: 'Hotels'
        });

    $urlRouterProvider.otherwise('/');

}]);
