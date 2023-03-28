import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <form className="form">
        <label for="fname">First Name</label>
        <input type="text" placeholder="First name" />
        <label for="sname">Last Name</label>
        <input type="text" placeholder="Last name" />
        <label for="email">Email Address</label>
        <input type="text" placeholder="Email Address" />
        <label for="password">Password</label>
        <input type="text" placeholder="Password" />
      </form>
    );
  }
}

export default SignUp;