'use strict';
var angular = require('angular');
var directives = angular.module('pokemon.directives', []);

directives.directive('error', function() {
  return {
    templateUrl: '../../views/error400.html'
  }
});
