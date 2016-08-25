'use strict';
var angular = require('angular');

var controllers = angular.module('pokemon.controllers', []);

controllers.controller('findPokemonCtrl', function($scope, pokemonFactory) {

  var successResponse = function(response) {
    console.log(response.data);
    $scope.pokemon = response.data;
    $scope.types = response.data.types;
  };

  var errorResponse = function(response) {
    $scope.error = response.statusText;
  };

  $scope.getPokemon = function() {
    pokemonFactory.getPokemonData($scope.pokemonName).then(successResponse, errorResponse);
  }
});
