'use strict';
var angular = require('angular');

var controllers = angular.module('pokemon.controllers', []);

controllers.controller('findPokemonCtrl', function($scope, pokemonFactory) {

  $scope.getPokemon = function() {
    pokemonFactory.getPokemonData($scope.pokemonName).then(function(response) {
        console.log(response);
      });
  }
});
