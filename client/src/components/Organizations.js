import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions'


class Organizations extends Component {
  render() {
    return (
      <div className="Organizations">
        <h1 className="orgoPara">
          You {this.props.date ? "have been" : "are"}
          {this.props.title ? " a " + this.props.title : " "}
          {this.props.name ? " at " + this.props.name : " "}
          {this.props.date ? " since " + this.props.date : ""}
        </h1>
        <button className="orgoButton" onClick={this.handleClick.bind(this)} type="submit">Show Me Everything</button>
      </div>
    );
  }

  handleClick(){
    this.props.next(6);
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
