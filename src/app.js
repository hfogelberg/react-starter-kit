import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';
import Checker from './components/apiChecker';

class App extends Component {
  apiMessage(message) {
    this.setState({message: message});
    alert(this.state.message);
  }

  render(){
    return (
        <div>
          <Hello />
          <Checker />
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
