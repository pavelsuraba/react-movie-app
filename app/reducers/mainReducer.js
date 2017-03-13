import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    loadingReducer,
    movieReducer
});