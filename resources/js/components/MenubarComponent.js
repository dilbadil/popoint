import React from 'react';
import mui from 'material-ui';

var Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    DropDownIcon = mui.DropDownIcon,
    FontIcon = mui.FontIcon,
    RaisedButton = mui.RaisedButton,
    LeftNav = mui.LeftNav
    ;

var menuItems = [
    {route: 'get-started', text: 'Get Started'},
    {route: 'css-framework', text: 'Css Framework'},
    {route: 'components', text: 'Components'},
    {type: 'components', text: 'Components'}
];

var filterOptions = [
  { payload: '1', text: 'All Broadcasts' },
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];

var iconMenuItems = [
    { payload: '1', text: 'Download' },
    { payload: '2', text: 'More Info' }
];

var MenubarComponent = React.createClass({

    showLeftNav: function() {
        this.refs.leftNav.toggle();
    },
    
    render: function() {
        return (
            <Toolbar>
                <ToolbarGroup key={0} float="left">
                    <DropDownMenu menuItems={filterOptions} />
                </ToolbarGroup>
                <ToolbarGroup key={1} float="right">
                    <FontIcon ref="ok" className="fa fa-plane" />
                    <FontIcon className="fa fa-heart" />
                    <DropDownIcon iconClassName="fa fa-check" menuItems={iconMenuItems} />
                    <span className="mui-toolbar-separator">&nbsp;</span>
                    <RaisedButton onClick={this.showLeftNav} label="Create Broadcast" primary={true} />
                    <LeftNav ref="leftNav" docked={false} menuItems={menuItems}  />
                </ToolbarGroup>
            </Toolbar>
        );
    }

});

export default MenubarComponent

