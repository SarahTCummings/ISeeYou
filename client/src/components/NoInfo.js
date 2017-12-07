import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';
import { back } from '../actions';


class NoInfo extends Component {
  render() {
    return (
      <div className="NoInfo">
        <div className="NoInfo_Words">
          <h1 className="NoInfo_header">Well done!</h1><h1>You have hidden yourself from me</h1>
          <button className="NoInfo_button"onClick={this.props.back} type="submit">Enter a Different Email</button>
        </div>
          <div class="newcharacter404">
            <div class="chair404"></div>
            <div class="leftshoe404"></div>
            <div class="rightshoe404"></div>
            <div class="legs404"></div>
            <div class="torso404">
              <div class="body404"></div>
              <div class="leftarm404"></div>
              <div class="rightarm404"></div>
              <div class="head404">
              </div>
            </div>
            <div class="laptop404">
            </div>
          </div>
    </div>

    );
  }
}

const mapActionsToProps = {
  back
}

export default connect(null, mapActionsToProps)(NoInfo);
