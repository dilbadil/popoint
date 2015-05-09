var angular                 = require('angular'),
    React                   = require('react'),
    ngreact                 = require('ngreact'),
    mui                     = require('material-ui'),
    injectTapEventPlugin    = require("react-tap-event-plugin");
    ;

injectTapEventPlugin(); 

var CounterComponent = require('./components/CounterComponent'), CounterController = require('./controllers/CounterController') ; angular.module('app', ['react'])
    .value('CounterComponent', CounterComponent)
    .value('RaisedButton', mui.RaisedButton)
    .value('DatePicker', mui.DatePicker)
    .controller('CounterController', CounterController)
