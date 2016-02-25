import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginReponse extends Component {
  render() {
    return (
      <div>
        <h2>Login Response</h2>
        <br />
        <div>
          <p>Message: {this.props.loggedIn.message}</p>
          <p>Token: {this.props.loggedIn.token}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.loggedIn};
}

export default connect(mapStateToProps)(LoginReponse);
