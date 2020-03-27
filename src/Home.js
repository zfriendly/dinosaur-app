import React, { Component } from "react";
// import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Component Did Mount");
  }

  render() {
    return (
      <div className="mainContainerGrid">
        <div className="gridContainer">
          <div id="welcome"></div>
          <div id="img1"></div>
          <div id="img2"></div>
          <div id="sub"></div>
        </div>
      </div>
    );
  }
}

export default Home;
