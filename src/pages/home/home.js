import React, { Component } from 'react';

import Header from '../../components/header/header';
import CreateTask from '../../components/createTask/createTask';
import TasksList from '../../components/tasksList/tasksList';
import './home.css';
import store from '../../todoStore';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.title = 'Todo Application';
        this.state = store.getState();

        store.subscribe(() => {
            console.log(store.getState());
            this.setState(store.getState());
        });
    }

    onToggleCheck(id) {
        store.dispatch({
            type: 'TOGGLE_TASK',
            taskId: id
        });
    }
    onDelete(id) {
        store.dispatch({
            type: 'DELETE_TASK',
            taskId: id
        });
    }
    onAddTask(name) {
        store.dispatch({
            type: 'ADD_TASK',
            taskName: name
        });
    }

    render() {
        return (
            <div>
                <Header titleText={this.title} />
                <div id="create-task-container">
                    <CreateTask onAddTask={(name) => this.onAddTask(name)} />
                </div>
                <div id="task-list-container">
                    <TasksList tasks={this.state.tasks}
                        onToggleCheck={(id) => this.onToggleCheck(id)}
                        onDelete={(id) => this.onDelete(id)} />
                </div>
            </div>
        );
    }
}
