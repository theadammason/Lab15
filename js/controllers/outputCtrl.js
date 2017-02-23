var app = angular.module('myMod');

app.controller('outputCtrl', function($scope, myFactory){
  $scope.display = myFactory.getWords();
  console.log($scope.display);
  });
