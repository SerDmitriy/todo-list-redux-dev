import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';


export default () => combineReducers({
  todosReducer,
  usersReducer,
  authReducer
})

