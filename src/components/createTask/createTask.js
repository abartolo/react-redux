import React, { Component } from 'react';
import {
    Grid,
    Paper,
    TextField,
    Button,
} from 'material-ui';
import './createTask.css';

export default class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: ''
        };
    }

    addTask() {
        if (this.state.newTaskName.trim().length === 0) {
            return false;
        }
        this.props.onAddTask(this.state.newTaskName);
        this.setState({ newTaskName: '' })
    }
    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.addTask();
        }
    }

    render() {
        return (
            <Grid container gutter={24} align="center" justify="center">
                <Grid item xs={5}>
                    <Paper id="create-task-paper">
                        <Grid container direction="row" align="flex-end" justify="space-between">
                            <Grid item xs={9}>
                                <TextField
                                    id="newTaskName"
                                    label="Create Task"
                                    value={this.state.newTaskName}
                                    onChange={event => this.setState({ newTaskName: event.target.value })}
                                    onKeyPress={event => this.onKeyPress(event)}
                                    marginForm
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <Button raised color="accent" onClick={() => this.addTask()}>
                                    Add
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button color="accent" onClick={() => this.props.onGoHome()}>
                                    Home
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

