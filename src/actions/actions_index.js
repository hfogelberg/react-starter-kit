import axios from 'axios';

export const SAY_HELLO = 'SAY_HELLO';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';

export function login(props) {
  const request = axios.post('/api/authenticate', props);
  return {
    type: LOGIN,
    payload: request
  };
}

export function signUp(props) {
  const request = axios.post('/api/users', props);
  return {
    type: SIGN_UP,
    payload: request
  };
}

export function sayHello(props) {
  const request = axios.post('/api/hello', props);
  return{
    type: SAY_HELLO,
    payload: request
  };
}
