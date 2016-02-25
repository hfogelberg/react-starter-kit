import {LOG_IN} from '../actions/actions_index';
const INITIAL_STATE = {loggedIn: {}};

export default function(state=INITIAL_STATE, action) {
  console.log('Action type: '+ action.type);
  switch (action.type) {
    case LOG_IN:
      console.log('Login reducer', action.payload.data);
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
