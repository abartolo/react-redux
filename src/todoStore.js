import { createStore } from 'redux';

const defaultState = {
    tasks: [
        { id: 1, name: "Task1", completed: false },
        { id: 2, name: "Task2", completed: false }
    ]
};

function todoStore(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return Object.assign({}, state, {
                tasks: state.tasks.concat([{
                    id: state.tasks.length + 1,
                    name: action.taskName,
                    completed: false
                }])
            });
        case 'TOGGLE_TASK':
            // Note - Questioning if I should also deepClone the objects inside the array
            return Object.assign({}, state, {
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId) {
                        task.completed = !task.completed;
                    }
                    return task;
                })
            });
        case 'DELETE_TASK':
            return Object.assign({}, state, {
                tasks: state.tasks.filter(task => {
                    return task.id !== action.taskId;
                })
            });
        default:
            return state;
    }
};

export default createStore(todoStore);
