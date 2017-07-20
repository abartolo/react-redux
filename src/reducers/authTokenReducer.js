export default function authTokenReducer(state = "", action) {
    switch (action.type) {
        case 'USER_LOGIN':
            console.log("authTokenReducer",action.data.token);
            // Set to new token recieved
            return action.data.token;
        case 'USER_LOGOUT':
            // Reset token
            return "";
        default:
            return state;
    }
}