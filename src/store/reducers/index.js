import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({ authReducer, projectReducer });

export default reducers;
