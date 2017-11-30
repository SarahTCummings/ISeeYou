import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShadowFigure from '../images/ShadowFigure.png';
import { next } from '../actions';

class Picture extends Component {
  render() {
    return (
      <div className="Picture">
        <img className="Giant_eye" src={ShadowFigure} alt="giant eye"/>
        <img className="Giant_eye_cape" src={ShadowFigure} alt="giant eye with cape"/>
        <div className="Picture_initial_container">
          <h1 className="Picture_initial_header">&#128065; Hello {this.props.name} &#128065;</h1>
          <img className="Picture_initial" src={this.props.data.photos[1].url} alt="David"/>
          <button className="Picture_initial_button" onClick={this.props.next} type="submit">Show Me More</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    name: state.data.contactInfo.fullName
  };
}

const mapActionsToProps = {
  next
}

export default connect(mapStateToProps, mapActionsToProps)(Picture);
