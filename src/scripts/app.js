'use strict';
var angular = require('angular');
var app = angular.module('pokemon', ['pokemon.controllers', 'pokemon.services', 'pokemon.directives']);

require('./controllers/mainController.js');
require('./directives/mainDirective.js');
require('./services/userService.js');
