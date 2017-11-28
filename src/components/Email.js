import React, { Component } from 'react';


class Email extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ""
    };
  }

  render() {
    return (
      <div className="Email" onSubmit={this.handleSubmit.bind(this)}>
        <form className="email_form">
          <label htmlFor="email_form"> <h1> Enter your email address. </h1> </label>
          <input id="email_form" type="text" placeholder="you@gmail.com" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleEmailChange(event) {
    this.setState ({
      email: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchData({
      email: this.state.email
    });
    this.setState({
      email:""
    })
  }
}

export default Email;
