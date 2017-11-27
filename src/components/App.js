import React, { Component } from 'react';
import Demographics from './Demographics';
import Email from './Email';
import Name from './Name';
import Organizations from './Organizations';
import Picture from './Picture';
import ShowMeAll from './ShowMeAll';
import David from '../public/david';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name/>
        <Email/>
        <Demographics/>
        <Organizations/>
        <Picture/>
        <ShowMeAll/>
      </div>
    );
  }
}

export default App;
