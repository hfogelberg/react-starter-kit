import axios from 'axios';

export const SAY_HELLO = 'SAY_HELLO';

export function sayHello(props) {
  const request = axios.post('/api/hello', props);

  console.log('Request', props);
  return{
    type: SAY_HELLO,
    payload: request
  };
}
