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
} from 'material-ui';
import HomeIcon from 'material-ui-icons/Home';
import DoneAllIcon from 'material-ui-icons/DoneAll';
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
                    <Toolbar>
                        <Avatar
                            id="logo"
                            alt="Tapsium Logo"
                            src="/assets/images/logo.png"
                        />
                        <Typography type="title" color="inherit">
                            Tapsium Portal
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Divider />
                <List id="sidemenu-list" disablePadding>
                    {
                        Routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} children={({ match, history, ...props }) => (
                                <ListItem button className={match ? 'sidemenu-link-selected' : ''} onClick={() => { history.push(route.path) }}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={route.title} />
                                </ListItem>
                            )} />
                        ))
                    }
                </List>
            </Drawer >
        );
    }
}