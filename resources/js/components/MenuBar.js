import React from 'react';
import mui from 'material-ui';

var Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    FontIcon = mui.FontIcon,
    DropDownIcon = mui.DropDownIcon,
    RaisedButton = mui.RaisedButton,
    IconButton = mui.IconButton,
    FlatButton = mui.FlatButton
    ;

var GroupLeft = React.createClass({
    
    render: function() {
        return (
            <ToolbarGroup key={0} float='left'>
                <DropDownMenu menuItems={this.props.filterOptions} />
            </ToolbarGroup>
        );
    }

});

var MenuBar = React.createClass({

    getDefaultProps: function() {
        var filterOptions = [
            {playload: '1', text: 'All Broadcasts'},
            {playload: '2', text: 'All Voice'},
            {playload: '3', text: 'All Text'}
        ];

        var iconMenuItems = [
            {playload: '1', text: 'Download'},
            {playload: '2', text: 'More Info'}
        ];

        return {
            filterOptions: filterOptions,
            iconMenuItems: iconMenuItems
        };
    },

    render: function() {
        return (
            <Toolbar>
                <FlatButton label="Default" />
            </Toolbar>
        );
    }

});

export default MenuBar;
