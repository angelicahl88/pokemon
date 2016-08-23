'use strict';
var angular = require('angular');
var services = angular.module('pokemon.services', []);

services.factory('pokemonFactory', function($http) {

  return {
    getPokemonData: function(pokeName) {
      return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokeName);
    }
  }

});
