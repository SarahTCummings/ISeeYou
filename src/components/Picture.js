import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pongo from '../images/pongo.jpg';

class Picture extends Component {
  render() {
    return (
      <div className="Picture">
        <img className="Giant_eye" src={Pongo} alt="giant eye"/>
        <img className="Giant_eye_cape" src={Pongo} alt="giant eye with cape"/>
        <h1>&#128065; Hello {this.props.name} &#128065;</h1>
        <img className="Picture_initial" src={this.props.data.photos[1].url} alt="David"/>
        <button type="submit">Show Me More</button>
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

export default connect(mapStateToProps)(Picture);
