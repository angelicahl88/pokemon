'use strict';
var angular = require('angular');

var controllers = angular.module('pokemon.controllers', []);

controllers.controller('findPokemonCtrl', function($scope, pokemonFactory) {

  var successResponse = function(response) {
    console.log(response);
  };

  var errorResponse = function(response) {
    if(response.status === 400) {
      printBadRequestMsg()
    }

  };

  $scope.getPokemon = function() {
    pokemonFactory.getPokemonData($scope.pokemonName).then(successResponse, errorResponse);
  }
});
