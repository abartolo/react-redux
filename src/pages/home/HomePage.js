import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.title = 'Home Page';
    }

    render() {
        return (
            <div>
                <Typography type="display4" gutterBottom>
                    {this.title}
                </Typography>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(HomePage);
