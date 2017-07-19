import React, { Component } from 'react';
import {
    Grid,
    Paper,
    List,
    ListItem,
    Checkbox,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import './tasksList.css';

export default class TasksList extends Component {

    render() {
        return (
            <Grid container gutter={0} align="center" justify="center">
                <Grid item xs={5}>
                    {
                        this.props.tasks.length > 0
                            ?
                            <Paper>
                                <List>
                                    {this.props.tasks.map(task =>
                                        <ListItem button key={task.id} onClick={() => this.props.onToggleCheck(task.id)}>
                                            <Checkbox
                                                checked={task.completed}
                                                tabIndex="-1"
                                            />
                                            <ListItemText className={task.completed ? 'taskTextCompleted' : null} primary={task.name} />
                                            <ListItemSecondaryAction>
                                                <IconButton aria-label="Delete" onClick={() => this.props.onDelete(task.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </Paper>
                            :
                            null
                    }
                </Grid>
            </Grid>
        );
    }
}

