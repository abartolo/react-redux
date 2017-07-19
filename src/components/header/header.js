import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import './header.css';

class Header extends Component {

    getRouteTitle(route) {
        switch (route) {
            case '/':
                return 'Home';
            case '/todos':
                return 'Todos';
            default:
                return 'Invalid Page';
        }
    }
    getHeaderContainerClass() {
        if (this.props.docked) {
            if (this.props.dockedCollapsed) {
                return 'header-container-docked-collapsed';
            } else {
                return 'header-container-docked';
            }
        }
        return '';
    }

    render() {
        return (
            <AppBar id="header-container" className={this.getHeaderContainerClass()} position="fixed">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu" onClick={this.props.onToggleSideMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit">
                        {this.getRouteTitle(this.props.location.pathname)}
                    </Typography>
                </Toolbar>
            </AppBar >
        );
    }
}

export default withRouter(Header);