import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Icon,
} from 'material-ui';
import Routes from '../../routes';
import './sideMenu.css';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            docked: true,
        };
    }

    toggleDrawer = () => {
        console.log("toggleDrawer", !this.state.open);
        this.setState({ open: !this.state.open });
    };

    navigateTo = () => {
        console.log("toggleDrawer", !this.state.open);
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <Drawer
                elevation={1}
                anchor="left"
                open={this.props.open}
                docked={this.props.docked}
                onClick={() => { this.props.onCloseSideMenu() }}
            >
                <AppBar id="sidemenu-appbar" position="static" color="default">
                    <Toolbar id="toolbar">
                        <Avatar
                            id="logo"
                            alt="Tapsium Logo"
                            src="/assets/images/logo.png"
                        />
                        {this.props.dockedCollapsed ?
                            null :
                            <Typography type="title" color="inherit">
                                Tapsium Portal
                            </Typography>
                        }
                    </Toolbar>
                </AppBar>
                <Divider />
                <List id="sidemenu-list" className={this.props.dockedCollapsed ? 'sidemenu-list-docked-collapsed' : 'sidemenu-list-docked'} disablePadding>
                    {
                        Routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} children={({ match, history, ...props }) => (
                                <ListItem button className={match ? 'sidemenu-link-selected' : ''} onClick={() => { history.push(route.path) }}>
                                    <ListItemIcon>
                                        <Icon>{route.icon}</Icon>
                                    </ListItemIcon>
                                    {this.props.dockedCollapsed ?
                                        null :
                                        <ListItemText primary={route.title} />
                                    }
                                </ListItem>
                            )} />
                        ))
                    }
                </List>
            </Drawer >
        );
    }
}