import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';
import { back } from '../actions';

class NoInfo extends Component {
  render() {
    return (
      <div className="NoInfo">
          <h1 className="NoInfo_header">Well done! You have hidden yourself from me.</h1>
          <button className="NoInfo_button" onClick={this.props.back} type="submit">Enter a Different Email</button>
      </div>
    );
  }
}

const mapActionsToProps = {
  back
}

export default connect(null, mapActionsToProps)(NoInfo);
