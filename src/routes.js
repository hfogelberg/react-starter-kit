import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Hello from './components/hello';
import About from './components/about';
import SecretPage from './components/secret_page';
import SignUp from './components/signup';
import Login from './components/login';
import SignupReponse from './containers/signup_response';
import LoginReponse from './containers/login_response';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Hello} />

    <Route path='/about' component={About} />
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
    <Route path='/signupresponse' component={SignupReponse} />
    <Route path='/loginresponse' component={LoginReponse} />
    <Route path='/secretpage' component={SecretPage} />
  </Route >
)
