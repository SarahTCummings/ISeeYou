import React, { Component } from 'react';


class Email extends Component {
  render() {
    return (
      <div className="Email">
        <form className="email_form">
          <label htmlFor="email_form"> What is your email address? </label>
          <input id="email_form" type="text" placeholder="Email Address"/>
        </form>
      </div>
    );
  }
}

export default Email;
