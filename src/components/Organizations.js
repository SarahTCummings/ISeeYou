import React, { Component } from 'react';
import { connect } from 'react-redux';


class Organizations extends Component {
  render() {
    return (
      <div className="Organizations">
        <p>You are a {this.props.title} at {this.props.name} since {this.props.date}</p>
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


export default connect(mapStateToProps)(Organizations);
