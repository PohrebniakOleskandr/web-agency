var app = angular.module("agency",['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
		templateUrl: 'pages/main.html',
		controller: 'ServicesCtrl'
    })
    .when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'ServicesCtrl'
    })
    .when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'ContactCtrl'
    })
    .when('/services', {
		templateUrl: 'pages/services.html',
		controller: 'ServicesCtrl'
    })
    .otherwise({redirectTo:'/main'});
}]);    

app.controller('ServicesCtrl', ['$scope','$http',function($scope, $http){
    $http.get('services.json').then(function(response){
        $scope.services = response.data;
    })
}]);

app.controller('ContactCtrl', ['$scope','$http',function($scope, $http){
        $http.get('locations.json').then(function(response){
        $scope.locations = response.data;
    })
}]);