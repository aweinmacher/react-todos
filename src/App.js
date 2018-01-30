import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import Todos from './Todos';
import './App.css';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.applicationName}</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Todos buttonText="Add point" />
      </div>
    );
  }
}

App.propTypes = {
  applicationName: PropTypes.string.isRequired
};

export default App;
