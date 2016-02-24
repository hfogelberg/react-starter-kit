import {SIGN_UP} from '../actions/actions_index';
const INITIAL_STATE = {user: {}};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
