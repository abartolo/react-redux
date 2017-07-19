import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

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

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton style={{ display: this.props.displayHamburger ? '' : 'none' }} color="contrast" aria-label="Menu" onClick={this.props.onToggleSideMenu}>
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