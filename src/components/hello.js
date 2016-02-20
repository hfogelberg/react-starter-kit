import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {sayHello} from '../actions/actions_index';
import { Link } from 'react-router';

class Hello extends Component {
  onSubmit(props) {
    console.log('onSubmit', props);
    this.props.sayHello(props);
  }

  render() {
    const{fields: {name}, handleSubmit } = this.props;

    return (
      <div className='col-sm-offset-1 col-sm-6'>
        <h2>Test API</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
            <label>Name</label>
            <input type='text' className='form-control' {...name}></input>
            <div className='text-help'>
              {name.touched ? name.error : ''}
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

  if(!values.name) {
    errors.title = 'Enter a name';
  }

  return errors;
}

export default reduxForm({
  form: 'SayHelloForm',
  fields: ['name', 'breed'],
  validate
}, null, {sayHello})(Hello);
