import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions'


class Demographics extends Component {
  render() {
    return (
      <div className="Demographics">
        <h1 className="demoPara">You are{this.props.gender ? " a " + this.props.gender : ""}
          {this.props.location ? " in " + this.props.location : ""}.
        </h1>
        <button onClick={this.handleClick.bind(this)} type="submit">Show Me More</button>
      </div>
    );
  }

handleClick(){
  this.props.next(this.props.orgs ? 5 : 6);
}

}

function mapStateToProps(state) {
  return {
    orgs: state.data.organizations,
    gender: state.data.demographics.gender,
    location: state.data.demographics.locationGeneral
  }
}
const mapActionsToProps = {
  next
}

export default connect(mapStateToProps, mapActionsToProps)(Demographics);
