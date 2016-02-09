import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {callServer} from '../actions/actions';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = {message: ''};

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render(){
    return (
      <div>
        <button onClick={this.onButtonClick}>Call API</button>
        <p>
          {this.state.message}
        </p>
      </div>
    )
  }

  onButtonClick(event){
    console.log('Button clicked');
    this.props.callServer(this.state.message);
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({callServer}, dispatch);
}

export default connect(null, mapDispathToProps)(Button);
