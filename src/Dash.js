import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
import "./App.css";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      data: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      fetch("https://nba-pi.herokuapp.com/users12345users")
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res });
        });
    }
  }

  render() {
    if (this.state.data) {
      let legends = this.state.data.map(legend => {
        return (
          <div className="returnedContainerUsers" key={legend._id}>
            <p className="returnedUsers">
              Name: {legend.firstname} {legend.lastname}
            </p>
            <p className="returnedUsers">Email: {legend.email}</p>
          </div>
        );
      });
      return (
        <div className="usersMain">
          <h1 id="adminDash">Admin Dashboard</h1>
          <h3 id="adminDash">Subscriber Info:</h3>
          <div className="users">{legends}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}

export default Dash;
