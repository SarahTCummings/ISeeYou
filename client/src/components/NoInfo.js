import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';
import { back } from '../actions';
import Eyelid404 from '../images/eyelid404.png';
import Pupil8 from '../images/404pupil.png';



class NoInfo extends Component {
  render() {
    return (
      <div>
        <div className="NoInfo">
          <h1 className="NoInfo_header">Well done!</h1><h1 className="NoInfo_header">You have hidden yourself from me.</h1>
          <button className="NoInfo_button" onClick={this.props.back} type="submit">Enter a Different Email</button>
        </div>
          <div className="newcharacter404">
            <div className="chair404"></div>
            <div className="leftshoe404"></div>
            <div className="rightshoe404"></div>
            <div className="legs404"></div>
            <div className="torso404">
              <div className="body404"></div>
              <div className="leftarm404"></div>
              <div className="rightarm404"></div>
              <div className="head404"></div>
            </div>
            <div className="laptop404"></div>
          </div>
        </div>

   );
  }
}

const mapActionsToProps = {
  back
}

export default connect(null, mapActionsToProps)(NoInfo);
