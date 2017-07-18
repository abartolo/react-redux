import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTask from '../../components/createTask/createTask';
import TasksList from '../../components/tasksList/tasksList';
import './TodoPage.css';
import * as todoActions from '../../actions/todoActions';

class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.title = 'Todo Application';
    }

    onToggleCheck(id) {
        this.props.actions.toggleTask(id);
    }
    onDelete(id) {
        this.props.actions.deleteTask(id);
    }
    onAddTask(name) {
        this.props.actions.addTask(name);
    }

    render() {
        return (
            <div>
                <div id="create-task-container">
                    <CreateTask onAddTask={(name) => this.onAddTask(name)} />
                </div>
                <div id="task-list-container">
                    <TasksList tasks={this.props.tasks}
                        onToggleCheck={(id) => this.onToggleCheck(id)}
                        onDelete={(id) => this.onDelete(id)} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
