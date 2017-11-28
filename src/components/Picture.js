import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Pongo from '../images/pongo.jpg';

class Picture extends Component {
  render() {
    return (
      <div className="Picture">
        <h1>Hello {this.props.name} &#128065;</h1>
        <img src={this.props.data.photos[1].url} alt="David"/>
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
