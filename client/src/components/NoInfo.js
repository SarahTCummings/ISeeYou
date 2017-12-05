import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';
import { back } from '../actions';

class NoInfo extends Component {
  render() {
    return (
      <div className="NoInfo">
          <h1 className="NoInfo_header">&#128065; Well done! You have hidden yourself from me &#128065;</h1>
          <button onClick={this.props.back} type="submit">Enter a Different Email</button>
      </div>
    );
  }
}

const mapActionsToProps = {
  back
}

export default connect(null, mapActionsToProps)(NoInfo);
