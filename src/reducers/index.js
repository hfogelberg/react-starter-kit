import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import HelloReducer from './reducer_hello';
import SignupReducer from './reducer_sign_up';

const rootReducer = combineReducers({
  message: HelloReducer,
  user: SignupReducer,
  form: formReducer
});

export default rootReducer;
