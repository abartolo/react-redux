import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import {
    Button,
    Paper,
    Grid,
    TextField,
} from 'material-ui';
import * as authActions from '../../actions/authActions';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.title = 'Login Page';
        this.state = {
            redirectToReferrer: false
        };
    }

    login() {
        // Should call API to authenticate user
        setTimeout(() => {
            console.log("Login");
            this.props.actions.userLogin({
                firstName: 'Alex',
                lastName: 'Bartolo',
                gender: 'male',
            }, "FAKE_TOKEN");
            this.setState({ redirectToReferrer: true });
        }, 2000);
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        // Redirect once user is logged in to where original path
        if (this.state.redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    align="center"
                    justify="center"
                    gutter={0}
                >
                    <Grid item xs={10} sm={4}>
                        <Paper id="login-container">
                            <TextField
                                id="uswin"
                                label="USWIN"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                margin="normal"
                                fullWidth
                            />
                            <Button id="login-button" raised color="primary" onClick={() => this.login()}>
                                Login
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
