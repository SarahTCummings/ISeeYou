import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureWithEye from '../images/figurewitheye.png';
import { next } from '../actions';
import NoInfo from './NoInfo';



class Picture extends Component {
  render() {
// the return of picture checks if the status of the rquest is 200 (or OK) and shows the photo if it is. IF it's not, the user is redirected to the 404 page (NoInfo)
    return (
    <div>
      { this.props.status === 200 ? <div className="Picture">
        <img className="Giant_eye" src={FigureWithEye} alt="giant eye"/>
        <img className="Giant_eye_cape" src={FigureWithEye} alt="giant eye with cape"/>
        <div className="Picture_initial_container">
          <h1 className="Picture_initial_header">&#128065; Hello {this.props.data.contactInfo.fullName} &#128065;</h1>
          <img className="Picture_initial" src={this.props.data.photos[1].url} alt={this.props.data.photos[1].typeId}/>
          <button className="Picture_initial_button" onClick={this.props.next} type="submit">Show Me More</button>
        </div>
      </div> : <NoInfo /> }
  </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    status: state.data.status
  };
}


// The const below counts the number of items returned to determine the level of visibility on the internet.
const numberOfDataPoints = this.props ? Object.keys(this.props.data) : 0;
console.log(numberOfDataPoints);

const mapActionsToProps = {
  next
}

export default connect(mapStateToProps, mapActionsToProps)(Picture);
