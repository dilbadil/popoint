ToolbarController.$inject = [];

function ToolbarController() {
    var vm = this;

    this.filterOptions = [
        {playload: '1', text: 'All Broadcasts'},
        {playload: '2', text: 'All Voice'},
        {playload: '3', text: 'All Text'},
        {playload: '4', text: 'All Document'}
    ];

    this.iconMenuItems = [
        {playload: '1', text: 'Download'},
        {playload: '2', text: 'More Info'}
    ];
}

export default ToolbarController;
