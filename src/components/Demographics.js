import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions'


class Demographics extends Component {
  render() {
    return (
      <div className="Demographics">
        <p>You are a {this.props.gender} in {this.props.location}</p>
        <button onClick={this.props.next} type="submit">Show Me More</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gender: state.data.demographics.gender,
    location: state.data.demographics.locationGeneral
  }
}
const mapActionsToProps = {
  next
}

export default connect(mapStateToProps, mapActionsToProps)(Demographics);
