'use strict';
var angular = require('angular');
var app = angular.module('pokemon', ['pokemon.controllers', 'pokemon.services']);

require('./controllers/mainController.js');
require('./directives/mainDirective.js');
require('./services/userService.js');
