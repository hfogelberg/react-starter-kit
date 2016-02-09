import { combineReducers } from 'redux';
import HelloReducer from './reducer_hello';

const rootReducer = combineReducers({
  message: HelloReducer
});

export default rootReducer;
