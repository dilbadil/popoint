<html ng-app="app">
    <head>
        <title>Just Testing</title>
    </head>
    <link rel="stylesheet" href="css/app-material.css"></link>
    <body>
        <div ng-controller="CounterController">
            <react-component props="{count: 2}" name="CounterComponent"></react-component> 
            <react-component props="{label: 'primary'}" name="RaisedButton"></react-component>
            <react-component props="{label: 'default'}" name="DatePicker"></react-component>
        </div>

        <script src="js/bundle.js"></script>
    </body>
</html>
