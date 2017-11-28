import React, { Component } from 'react';
import { connect } from 'react-redux';


class Demographics extends Component {
  render() {
    return (
      <div className="Demographics">
        <p>You are a {this.props.gender} in {this.props.location}</p>
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

export default connect(mapStateToProps)(Demographics);
