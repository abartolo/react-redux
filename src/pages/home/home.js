import React, { Component } from 'react';

import Header from '../../components/header/header';
import CreateTask from '../../components/createTask/createTask';
import TasksList from '../../components/tasksList/tasksList';
import './home.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.title = 'Todo Application';
        this.state = {
            tasks: [
                { id: 1, name: "Task1", completed: false },
                { id: 2, name: "Task2", completed: false },
            ]
        };
    }

    onToggleCheck(id) {
        let tasks = this.state.tasks.map(task => {
            let newTask = Object.assign({}, task);
            if (task.id === id) {
                newTask.completed = !newTask.completed;
            }
            return newTask;
        });
        this.setState({
            tasks
        });
    }
    onDelete(id) {
        console.log("onDelete called", id);
        let tasks = this.state.tasks
            .map(task => {
                let newTask = Object.assign({}, task);
                return newTask;
            })
            .filter(task => {
                return task.id !== id;
            });
        this.setState({
            tasks
        });
    }
    onAddTask(name) {
        console.log("onAddTask called", name);
        let tasks = this.state.tasks
            .map(task => {
                let newTask = Object.assign({}, task);
                return newTask;
            });
        tasks.push({
            id: tasks.length + 1,
            name,
            completed: false
        });
        this.setState({
            tasks
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
