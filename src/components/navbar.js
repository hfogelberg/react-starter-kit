import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav nav-pills col-sm-offset-1 col-sm-6">
        <li className="active"><Link to='/'>Say Hello</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
      </ul>
    );
  }
}
