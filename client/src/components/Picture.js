import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';
import { next } from '../actions';
import NoInfo from './NoInfo';
import ShadowFigure from '../images/ShadowFigure.png';
import Eyeball from '../images/eyeball.png';



class Picture extends Component {
  render() {
    const numberOfDataPoints = this.props.data ? Object.keys(this.props.data).length : 0;
// the return of picture checks if the status of the rquest is 200 (or OK) and shows the photo if it is. IF it's not, the user is redirected to the 404 page (NoInfo)
    return (
    <div>
      { this.props.status === 200 ? <div className="Picture">

        <div className="Picture_initial_container">
          <h1 className="Picture_initial_header"> Hello {this.props.data.contactInfo ? this.props.data.contactInfo.fullName || null : null}</h1>
          <h2>You are {numberOfDataPoints <= 6 ? "somewhat" : "very"} visible</h2>
          {this.props.data.photos ?
          <img className="Picture_initial" src={this.props.data.photos[0].url} alt={this.props.data.photos[0].typeId} /> :
          [
          <img key="shadowFigure" className="Picture_initial" src={ShadowFigure} alt="shadowy figure" />]}
          <button className="Picture_initial_button" onClick={this.handleClick.bind(this)} type="submit">Show Me More</button>
        </div>
      </div> : <NoInfo /> }
  </div>
    );
  }

  handleClick(){
    this.props.next(this.props.data.demographics ? 4 : this.props.data.organizations ? 5 : 6);
  }

}

function mapStateToProps(state) {
  return {
    data: state.data,
    status: state.data.status
  };
}


// The const below counts the number of items returned to determine the level of visibility on the internet.

const mapActionsToProps = {
  next
}

export default connect(mapStateToProps, mapActionsToProps)(Picture);
