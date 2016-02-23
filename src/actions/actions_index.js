import axios from 'axios';

export const SAY_HELLO = 'SAY_HELLO';
export const SIGN_UP = 'SIGN_UP';

export function signUp(props) {
  const request = axios.post('/api/users', props);
  console.log('SIGN_UP request', request);
  return {
    type: SIGN_UP,
    payload: request
  };
}

export function sayHello(props) {
  const request = axios.post('/api/hello', props);

  console.log('Request', props);
  return{
    type: SAY_HELLO,
    payload: request
  };
}
