import React, { Component } from 'react';
import { next } from '../actions';
import { connect } from 'react-redux';
import ShadowFigure from '../images/ShadowFigure.png';



class WelcomePage extends Component {
  render () {
    return (
        <div className="Welcome">
           {/* <div className="WelcomeFigure">
            <img className="WelcomeFigure2" src={ShadowFigure} alt="shadowy figure"></img>
          </div> */}
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
