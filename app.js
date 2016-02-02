import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

class App extends Component {
  render(){
    return <Hello />
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
