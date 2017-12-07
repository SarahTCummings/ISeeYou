import React, { Component } from 'react';
import closed-eye from '../images/clsed-eye.png'

class NoInfoEyes extends Component {
  render() {
    return (
      <div>
        <img className="NoEyes" src={closed-eye} alt="closed eye"/>
      </div>
    );
  }
}

export default NoInfoEyes;
