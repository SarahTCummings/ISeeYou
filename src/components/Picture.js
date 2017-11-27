import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Pongo from '../images/pongo.jpg';

class Picture extends Component {
  render() {
    return (
      <div className="Picture">
        <img src={this.props.data.photos[0].url} alt="penguin"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(Picture);
