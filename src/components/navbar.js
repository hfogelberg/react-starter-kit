import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Navbar extends Component {
  render() {
    if (this.props.user.token) {
      return (
        <ul className="nav nav-pills col-sm-offset-1">
          <li className="active"><Link to='/'><i className="fa fa-lg fa-home"></i> Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/secretpage'>Secret page</Link></li>
          <li className="pull-right dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-lg fa-user"></i> User <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a>Settings</a></li>
              <li><a>Log out</a></li>
            </ul>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav nav-pills col-sm-offset-1">
          <li className="active"><Link to='/'><i className="fa fa-lg fa-home"></i> Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="pull-right dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-lg fa-user"></i> User <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><Link to='/signup'>Sign up</Link></li>
              <li><Link to='/login'>Log in</Link></li>
            </ul>
          </li>
        </ul>
      );
    }
  }
}

function mapStateToProps(state){
  return {user: state.user};
}

export default  connect(mapStateToProps)(Navbar)
