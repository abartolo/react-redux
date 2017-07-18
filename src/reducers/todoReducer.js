export default function todoReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                id: state.length + 1,
                name: action.taskName,
                completed: false
            }];
        case 'TOGGLE_TASK':
            return [...state]
                .map(task => {
                    if (task.id === action.taskId) {
                        task.completed = !task.completed;
                    }
                    return task;
                });
        case 'DELETE_TASK':
            return [...state]
                .filter(task => {
                    return task.id !== action.taskId;
                });
        default:
            return state;
    }
}