import React, { Component } from 'react';
import { connect } from 'react-redux';
import Demographics from './Demographics';
import Email from './Email';
import Organizations from './Organizations';
import Picture from './Picture';
import ShowMeAll from './ShowMeAll';

class App extends Component {
  render() {
    const Form = this.props.screen === 1 && <Email />;
    const Pic = this.props.screen === 2 && <Picture />;
    const Demo = this.props.screen === 3 && <Demographics />;
    const Orgo = this.props.screen === 4 && <Organizations />;
    const ShowAll = this.props.screen === 5 && <ShowMeAll />;

    return (
      <div className="App">
        {Form}
        {Pic}
        {Demo}
        {Orgo}
        {ShowAll}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    isLoading: state.isLoading,
    screen: state.screen
  };
}

export default connect(mapStateToProps)(App);
