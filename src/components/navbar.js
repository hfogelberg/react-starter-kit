import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav nav-pills col-sm-offset-1">
        <li className="active"><Link to='/'>Say Hello</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="pull-right dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> User <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><Link to='/signup'>Sign up</Link></li>
            <li><a href="#">Log in</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}
