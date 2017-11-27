import React, { Component } from 'react';


class Name extends Component {
  render() {
    return (
      <div className="Name">
          <form className="name_form">
            <label for="name_form"> What is your full name? </label>
            <input id="name_form" type="text" placeholder="First and Last Name"/>
          </form>
      </div>
    );
  }
}

export default Name;
