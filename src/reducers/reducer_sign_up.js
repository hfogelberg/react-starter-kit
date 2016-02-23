import {SIGN_UP} from '../actions/actions_index';
const INITIAL_STATE = {message: ''};

export default function(state=INITIAL_STATE, action) {
  console.log('Action received', action);

  switch (action.type) {
    case SIGN_UP:
      alert('You\'ve signed up! Now try logging in. The token is ' + action.payload.data.token);
      console.log('SIGN_UP action: ' + action.payload.data);
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
