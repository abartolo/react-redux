import React, { Component } from 'react';
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
                <List style={{ width: '250px' }} disablePadding>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DoneAllIcon />
                        </ListItemIcon>
                        <ListItemText primary="Todo" />
                    </ListItem>
                </List>
            </Drawer >
        );
    }
}