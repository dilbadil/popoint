var angular = require('angular');
var ngreact = require('ngreact');
var MenubarComponent = require('./components/MenubarComponent');
var MenubarController = require('./controllers/MenubarController');
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

angular.module('app', ['react'])
    .value('MenubarComponent', MenubarComponent)
    .controller('MenubarController', MenubarController)
