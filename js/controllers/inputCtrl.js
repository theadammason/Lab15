var app = angular.module('myMod');

app.controller('inputCtrl', function($scope, $location, myFactory){

  $scope.getInput = function(words){

    console.log(words);

    myFactory.sendWords(words);

  $location.path('/output');


  }

});
