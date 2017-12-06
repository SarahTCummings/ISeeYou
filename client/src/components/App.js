import React, { Component } from 'react';
import { connect } from 'react-redux';
import Demographics from './Demographics';
import Email from './Email';
import Organizations from './Organizations';
import Picture from './Picture';
import ShowMeAll from './ShowMeAll';
import WelcomePage from './WelcomePage';

class App extends Component {
  render() {
// this section below is how we toggle between components by clicking the button on each component. The code below updates the state to the corresponding component's screen number when the button is clicked. The syntax below as written is an if statement.

    const numberOfDataPoints = this.props.data ? Object.keys(this.props.data).length : 0;
    const Welcome = this.props.screen === 1 && <WelcomePage />;
    const Form = this.props.screen === 2 && <Email />;
    const Pic = this.props.screen === 3 && <Picture />;
    const Demo = this.props.screen === 4 && <Demographics />;
    const Orgo = this.props.screen === 5 && <Organizations />;
    const ShowAll = this.props.screen === 6 && <ShowMeAll />;
    const Somewhat1 = ((this.props.screen > 2) && (numberOfDataPoints <= 6)) ? <div className="yellow">6 or less</div> : null;
    const Somewhat2 = ((this.props.screen > 2) && (numberOfDataPoints >= 7)) ? <div className="red">7 or more</div> : null;

    return (
      <div className="App">
        <div className="hiddingForms"></div>
        {Welcome}
        {Form}
        {Somewhat1}
        {Somewhat2}
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
