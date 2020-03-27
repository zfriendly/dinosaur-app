import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
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
          <img id="dino" src={dino} alt="dino" height="95" />
          {/* <Link className="headerLinkChamps" to="/championships">
            <h3 className="topLinks">Championships</h3>
          </Link>

          <Link className="headerLinkHome" to="/">
            <h1 className="title">NBA Hub</h1>
          </Link>

          <Link className="headerLinkLegends" to="/legends">
            <h3 className="topLinks">Legends</h3>
          </Link> */}
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/admindash" component={Dash} />
          </Switch>
        </main>
        <footer>
          <h3 className="admin">Admin Dashboard</h3>
        </footer>
      </div>
    );
  }
}

export default App;
