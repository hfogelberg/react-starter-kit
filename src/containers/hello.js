import React, {Component} from 'react';
import {connect} from 'react-redux';

class Hello extends Component {
  render(){
    return (
      <div>
        <h1>Hello from Redux!</h1>
        <br></br>
        <br></br>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
}

function mapStateToProps({message}){
  return { message };
}

export default connect(mapStateToProps)(Hello);
