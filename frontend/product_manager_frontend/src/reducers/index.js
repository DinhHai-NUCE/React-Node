import { combineReducers } from 'redux';
import itemReducer from './item';

const rootReducer = combineReducers({
    item: itemReducer
})

export default rootReducer