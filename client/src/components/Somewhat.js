import React, { Component } from 'react';
import ShadowFigure from '../images/ShadowFigure.png';
import EyeWhite from '../images/eye2white.png';
import Eyelid from '../images/eyeball.png';
import Pupil from '../images/pupil.png'




class Somewhat extends Component {
  render() {
    return (
      <div className="Somewhat">
        <img className="Eye1" src={EyeWhite} alt="eyeball"/>
        <img className="Pupil1" src={Pupil} alt="pupil"/>
        <img className="Eyelid1" src={Eyelid} alt="closed eye" />
        <img className="Eye2" src={EyeWhite} alt="eyeball"/>
        <img className="Pupil2" src={Pupil} alt="pupil"/>
        <img className="Eyelid2" src={Eyelid} alt="closed eye" />
        <img className="Eye3" src={EyeWhite} alt="eyeball"/>
        <img className="Pupil3" src={Pupil} alt="pupil"/>
        <img className="Eyelid3" src={Eyelid} alt="closed eye" />

      </div>

    );
  }
}


export default Somewhat;
