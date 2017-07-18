import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
} from 'material-ui';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import DoneAllIcon from 'material-ui-icons/DoneAll';
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

    navigationLinks = ({ title, history }) => (
        <button
            type="button"
            onClick={() => history.push('/my-new-location')}
        >
            {title}
        </button>
    );

    render() {
        return (
            <Drawer
                anchor="left"
                open={this.state.open}
                docked={this.state.docked}
                onClick={() => { this.toggleDrawer() }}
            >
                <AppBar id="sidemenu-appbar" position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Tapsium Portal
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Divider />
                <List id="sidemenu-list" disablePadding>
                    <Route path="/" exact="true" children={({ match, history, ...props }) => {
                        return (
                            <ListItem button className={match ? 'sidemenu-link-selected' : ''} onClick={() => { history.push('/') }}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        )
                    }
                    } />
                    <Route path="/todo" children={({ match, history, ...props }) => {
                        return (
                            <ListItem button className={match ? 'sidemenu-link-selected' : ''} onClick={() => { history.push('/todo') }}>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                                <ListItemText primary="Todo" />
                            </ListItem>
                        )
                    }
                    } />
                </List>
            </Drawer >
        );
    }
}