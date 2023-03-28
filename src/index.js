import React from "react";
import ReactDOM from "react-dom";
import Login from "./login/Login.js";
import SignUp from "./login/signup.js";

import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Login />
        <p className="signup-label">
          Don't have an account?{" "}
          <a href="#" className="link">
            Sign up
          </a>
        </p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);