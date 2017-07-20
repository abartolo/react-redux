export function userLogin(user,token) {
    return {
        type: 'USER_LOGIN',
        data: {
            token,
            user
        }
    }
}
export function userLogout() {
    return {
        type: 'USER_LOGOUT',
    }
}
export function userUnauthorized(id) {
    return {
        type: 'USER_UNAUTHORIZED',
    }   
}