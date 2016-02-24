import React, {Component} from 'react';
import {connect} from 'react-redux';

class SignupReponse extends Component {
  render() {
    return (
      <div>
        <h2>Signup Response</h2>
        <br />
        <div>
          <p>Message: {this.props.user.message}</p>
          <p>Token: {this.props.user.token}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.user};
}

export default connect(mapStateToProps)(SignupReponse);
