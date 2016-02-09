import axios from 'axios';

export const CALL_SERVER = 'CALL_SERVER';

export function callServer(){
  const request = axios.get('/api/time');

  console.log('Request', request);
  return {
    type: CALL_SERVER,
    payload: request
  }
}
