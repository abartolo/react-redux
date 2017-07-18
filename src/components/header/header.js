import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

export default class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton style={{ display: this.props.displayHamburger ? '' : 'none' }} color="contrast" aria-label="Menu" onClick={this.props.onToggleSideMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit">
                        {this.props.titleText}
                    </Typography>
                </Toolbar>
            </AppBar >
        );
    }
}