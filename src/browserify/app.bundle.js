(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var angular = require('angular');
var app = angular.module('pokemon', ['pokemon.controllers', 'pokemon.services', 'pokemon.directives']);

require('./controllers/mainController.js');
require('./directives/mainDirective.js');
require('./services/userService.js');

},{"./controllers/mainController.js":2,"./directives/mainDirective.js":3,"./services/userService.js":4,"angular":"angular"}],2:[function(require,module,exports){
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

},{"angular":"angular"}],3:[function(require,module,exports){
'use strict';
var angular = require('angular');
var directives = angular.module('pokemon.directives', []);

directives.directive('error', function() {
  return {
    templateUrl: '../../views/error400.html'
  }
});

directives.directive('pokemonDirective', function() {
  return {
    templateUrl: '../../views/pokemon.html',
    controller: findPokemonCtrl
  }
});

},{"angular":"angular"}],4:[function(require,module,exports){
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

},{"angular":"angular"}]},{},[1]);
