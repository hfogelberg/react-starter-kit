import {CALL_SERVER} from '../actions/actions';

export default function(state=[], action) {
  console.log('Action received', action);

  switch (action.type) {
    case CALL_SERVER:
      console.log(action.payload.data.message);
      return action.payload.data.message;
      break;
    default:

  }

  return state;
}
