import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from 'material-ui';

export default class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        {this.props.titleText}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}