import React, { Component } from "react";
import "./Signup.css";
import "./App.css";
import Axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  onChangeLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onSubmit = e => {
    if (this.state.name === null || this.state.team === null) {
      return;
    } else {
      e.preventDefault();
      console.log("Submitted");

      const newUser = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email
      };

      Axios.post(
        "https://nba-pi.herokuapp.com/users12345users",
        newUser
      ).then(res => console.log(res));
      this.setState({
        firstName: null,
        lastName: null,
        email: null
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="formContainer">
        <form className="submitForm" onSubmit={this.onSubmit}>
          <br />
          <h1>Sign Up!</h1>
          <br />
          <div className="formInput">
            <label className="inputLabel">First Name: </label>
            <input
              className="inputBox"
              type="text"
              onChange={this.onChangeFirstName}
            />
          </div>

          <div className="formInput">
            <label className="inputLabel">Last Name: </label>
            <input
              className="inputBox"
              type="text"
              onChange={this.onChangeLastName}
            />
          </div>

          <div className="formInput">
            <label className="inputLabel">Email: </label>
            <input
              className="inputBox"
              type="text"
              onChange={this.onChangeEmail}
            />
          </div>
          <br />
          <input className="submit" type="submit" value="Submit" />
        </form>
        <footer>
          <h3 className="admin">Admin Dashboard</h3>
        </footer>
      </div>
    );
  }
}

export default Signup;
