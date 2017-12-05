import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';

class NoInfo extends Component {
  render() {
    return (
      <div className="NoInfo">
          <h1 className="NoInfo_header">&#128065; Well done, You have hidden yourself from me &#128065;</h1>
      </div>
    );
  }
}

export default NoInfo;
