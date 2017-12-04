import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions'


class Organizations extends Component {
  render() {
    return (
      <div className="Organizations">
        <h1 className="orgoPara">You are a {this.props.title} at {this.props.name} since {this.props.date}</h1>
        <button className="orgoButton" onClick={this.props.next} type="submit">Show Me Everything</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.data.organizations[0].title,
    name: state.data.organizations[0].name,
    date: state.data.organizations[0].startDate
  }
}
const mapActionsToProps = {
  next
}

export default connect(mapStateToProps, mapActionsToProps)(Organizations);
