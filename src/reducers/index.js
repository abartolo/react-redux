import { combineReducers } from 'redux';
import authTokenReducer from './authTokenReducer';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    authToken: authTokenReducer,
    user: userReducer,
    tasks: todoReducer
});

export default rootReducer;
