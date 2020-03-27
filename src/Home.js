import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
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
          <div id="left">
            <div id="welcome">
              Welcome to Dinosaur Land, where all of your dino-related dreams
              come to life!
            </div>
            <div id="sub">
              <div id="sub_text">
                Open for 50 years, this roadside attraction features over 50
                dinosaurs, inviting visitors to step into the world of the
                prehistoric past, turning back the pages of time to the Mesozoic
                era, when dinosaurs were the only creatures that roamed the
                earth. Click below to sign up for our free mailing list!
              </div>
              <div id="sub_button">
                <Link to={"/signup"}>SUBSCRIBE</Link>
              </div>
            </div>
          </div>
          <div id="right"></div>
        </div>
        <footer>
          <Link className="adminlink" to="/admindash">
            <h3 className="admin">Admin Dashboard</h3>
          </Link>
        </footer>
      </div>
    );
  }
}

export default Home;
