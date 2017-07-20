var app = angular.module("agency",['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
		templateUrl: 'main.html',
		controller: 'MainCtrl'
    })
    .otherwise({redirectTo:'/main'});
}]);    

app.controller('MainCtrl', ['$scope',function($scope){
    console.log($scope);
}]);