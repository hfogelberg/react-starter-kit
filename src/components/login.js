import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {login} from '../actions/actions_index';
import { Router, browserHistory } from 'react-router';

class Login extends Component {
  onSubmit(props) {
    console.log('onSubmit', props);
    this.props.login(props).
      then(() => {
        browserHistory.push('/loginresponse');
      });
  }

  render() {
    const{fields: {username, password}, handleSubmit } = this.props;

    return (
      <div className='col-sm-offset-1 col-sm-6'>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className={`form-group ${username.touched && username.invalid ? 'has-danger' : ''}`}>
            <label>User name</label>
            <input type='text' className='form-control' {...username}></input>
            <div className='text-help'>
              {username.touched ? username.error : ''}
            </div>
          </div>

          <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
            <label>Password</label>
            <input type='password' className='form-control' {...password}></input>
            <div className='text-help'>
              {password.touched ? password.error : ''}
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <br />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.username) {
    errors.title = 'Enter a user name';
  }

  if(!values.password) {
    errors.title = 'Enter a password';
  }

  return errors;
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['username', 'password'],
  validate
}, null, {login})(Login);
