var app = angular.module('myMod');

app.factory('myFactory', function(){
  var result = {};

  return {
    sendWords: function(words){
    result = words;
  },

    getWords: function(){
      return result;
    }
  }

});
