import React, {Component} from 'react';
import Button from '../containers/button';
import Hello from '../containers/hello';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Hello />
      </div>
    );
  }
}
