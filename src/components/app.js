import React, { Component } from 'react';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Redux Starter Kit</h1>
        <Navbar />
        <div class = 'content'>          
          {this.props.children}
        </div>
      </div>
    );
  }
}
