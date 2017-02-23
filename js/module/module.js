var app = angular.module('myMod', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider){

    $routeProvider
      .when('/input', {
        controller: 'inputCtrl',
        templateUrl: 'views/input.html'
      })
      .when('/output', {
        controller: 'outputCtrl',
        templateUrl: 'views/output.html'
      })
      .otherwise({redirectTo: '/input'});
    $locationProvider.hashPrefix('');
  });
