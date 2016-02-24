import {SAY_HELLO} from '../actions/actions_index';
const INITIAL_STATE = {message: ''};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SAY_HELLO:
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
