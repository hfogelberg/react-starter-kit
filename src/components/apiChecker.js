import React, {Component} from 'react';
import superagent from 'superagent';

export default class ApiChecker extends Component {
  constructor(props){
    super(props);
    this.state = {message: ''};
  }

  render(){
    return (
      <div>
        <button onClick={() => this.handleClickEvent()}>Call API</button>
        <p>
          {this.state.message}
        </p>
      </div>
    )
  }

  handleClickEvent(){
    superagent.get('/api/time')
              .end(function(err, res){
                if(err){
                  alert('Error');
                } else {
                  var ret = JSON.parse(JSON.stringify(res.body));
                  var message = ret.message;
                  this.setState({message: message});
                }
              }.bind(this));

  }
}
