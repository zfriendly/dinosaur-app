import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import HomeIcon from "@material-ui/icons/Home";

import Signup from "./Signup";
import Dash from "./Dash";
import "./App.css";
import dino from "./dino.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Component Did Mount");
  }

  render() {
    return (
      <div className="mainContainer">
        <nav>
          <Link to={"/"}>
            <img id="dino" src={dino} alt="dino" height="95" />
          </Link>
          <div className="nav__links">
            <div className="subscribe__icon">
              <Link to={"/signup"}>Subscribe</Link>
            </div>
            <div className="home__icon">
              <Link to={"/"}>
                <HomeIcon fontSize="large" color="white" />
              </Link>
            </div>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/admindash" component={Dash} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
