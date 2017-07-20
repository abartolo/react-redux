export default function userReducer(state = "", action) {
    switch (action.type) {
        case 'USER_LOGIN':
            // Set to user
            return action.data.user;
        case 'USER_LOGOUT':
            // Reset token
            return null;
        default:
            return state;
    }
}