import mui from 'material-ui';

MenubarController.$inject = [];

function MenubarController() {
    var vm =  this;   

    vm.menuItems = [
        {route: 'get-started', text: 'Get Started'},
        {route: 'css-framework', text: 'Css Framework'},
        {route: 'components', text: 'Components'},
        {type: 'components', text: 'Components'}
    ];

    vm.toggleLeftNav = function() {
        mui.LeftNav.toggle();
    };
}

export default MenubarController;
