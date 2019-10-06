import React, { Component } from 'react';

import Header from './header';
import Card from './card';

import '../styles/App.scss';

class App extends Component {
  render () {
    return (
      <div className="App">
        { Header() }
        <Card />
      </div>
    );
  };
};

export default App;