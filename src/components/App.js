import React, { Component } from 'react';
import { connect } from 'react-redux';
import Demographics from './Demographics';
import Email from './Email';
import Name from './Name';
import Organizations from './Organizations';
import Picture from './Picture';
import ShowMeAll from './ShowMeAll';

class App extends Component {
  render() {
    // const something = this.props.data.map((data) => (
    //   <Picture data={data} key={data.contactInfo.fullName} />
    // ));
    return (
      <div className="App">
        {
          this.props.isLoading ?
          <div>Loading</div> :
          [
          <Picture />,
          <Demographics />,
          <Organizations />,
          ]
        }

        <Name/>
        <Email/>
        <ShowMeAll/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(App);
