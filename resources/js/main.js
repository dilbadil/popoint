var ngreact                 = require('ngreact'),
    React                   = require('react'),
    angular                 = require('angular'),
    injectTapEventPlugin    = require("react-tap-event-plugin")
    ;

injectTapEventPlugin(); 

var ToolbarController = require('./controllers/ToolbarController')
    ;

angular.module('popoApp', ['react'])
    .value('MenuBarComponent', require('./components/MenuBar'))
    .controller('ToolbarController', ToolbarController)
