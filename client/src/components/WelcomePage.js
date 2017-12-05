import React, { Component } from 'react';
import { next } from '../actions';
import { connect } from 'react-redux';
import Eye2 from '../images/eye2.png';
import Pupil from '../images/pupil.png';
import Cloaknoeyesmll from '../images/cloaknoeyesmll.png';
import ShadowFigure from '../images/ShadowFigure.png';
import Eyeball from '../images/eyeball.png';



class WelcomePage extends Component {
  render () {
    return (
        <div className="Welcome">
           <div className="WelcomeFigure">
            <img className="WelcomeFigure2" src={ShadowFigure} alt="shadowy figure"></img>
          </div>
            <img className="WelcomeMobile" src={Cloaknoeyesmll} alt="shadowy figure"/>
            <img className="WelcomeMobileEye " src={Eye2} alt="graphic eye"/>
            <img className="WelcomeMobilePupil" src={Pupil} alt="pupil"/>
            <img className="WelcomMoblileClosedEye" src={Eyeball} alt="closed eye" />
          <div className="WelcomeBox">
            <h1> Welcome, human. <br></br> Would you like to know what I see? </h1>
            <button onClick={this.props.next} type="submit">Yes, continue</button>
          </div>
        </div>
    );
  }
}
const mapActionsToProps = {
  next
}

export default connect(null, mapActionsToProps)(WelcomePage);
