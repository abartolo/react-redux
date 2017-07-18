export function addTask(name) {
    return {
        type: 'ADD_TASK',
        taskName: name
    }
}
export function toggleTask(id) {
    return {
        type: 'TOGGLE_TASK',
        taskId: id
    }
}
export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        taskId: id
    }   
}