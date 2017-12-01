import React, { Component } from 'react';
import { next } from '../actions';
import { connect } from 'react-redux';
import Eye2 from '../images/eye2.png';
import Cloaknoeyesmll from '../images/cloaknoeyesmll.png';
import ShadowFigure from '../images/ShadowFigure.png';
import Eyeball from '../images/eyeball.png';



class WelcomePage extends Component {
  render () {
    return (
        <div className="Welcome">
           {/* <div className="WelcomeFigure">
            <img className="WelcomeFigure2" src={ShadowFigure} alt="shadowy figure"></img>
<<<<<<< HEAD
          </div> */}
=======
          </div>
            <img className="WelcomeMobile" src={Cloaknoeyesmll} alt="shadowy figure"></img>
            <img className="WelcomeMobileEye " src={Eye2} alt="graphic eye"></img>
            <img className="WelcomMoblileClosedEye" src={Eyeball} alt="closed eye"></img>
>>>>>>> b756ce6e4bacb566da2f15cdf600d4c1554f5bea
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
