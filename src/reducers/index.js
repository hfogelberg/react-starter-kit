import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import HelloReducer from './reducer_hello';

const rootReducer = combineReducers({
  message: HelloReducer,
  form: formReducer
});

export default rootReducer;
