var angular                 = require('angular'),
    React                   = require('react'),
    ngreact                 = require('ngreact'),
    injectTapEventPlugin    = require("react-tap-event-plugin")
    ;

injectTapEventPlugin(); 

var ToolbarController = require('./controllers/ToolbarController')
    ;

angular.module('popoApp', ['react'])
    .value('MenuBarComponent', require('./components/MenuBar'))
    .controller('ToolbarController', ToolbarController)
