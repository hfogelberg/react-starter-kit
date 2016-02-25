import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import HelloReducer from './reducer_hello';
import SignupReducer from './reducer_sign_up';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  message: HelloReducer,
  user: SignupReducer,
  loggedIn: LoginReducer,
  form: formReducer
});

export default rootReducer;
