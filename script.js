var app = angular.module("agency",['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
		templateUrl: 'pages/main.html',
		controller: 'MainCtrl'
    })
    .when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'MainCtrl'
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

app.controller('MainCtrl', ['$scope',function($scope){
    //console.log($scope);
    console.log('hello');
}]);


app.controller('ServicesCtrl', ['$scope',function($scope){
    
}]);

app.controller('ContactCtrl', ['$scope',function($scope){
    
}]);