import {LOGIN} from '../actions/actions_index';
const INITIAL_STATE = {user: {}};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      console.log('Login reducer', action.payload.data);
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
