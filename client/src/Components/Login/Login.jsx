import React from "react";
// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
import API from "./../../Utils/api";
import "./Login.css";

function Login() {
  function formSubmit(e) {
    e.preventDefault();
    API.login({
      email: "",
      password: "password",
    }).then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <ReactBootstrap.Container
        className="justify-content-md-center"
        id="loginContainer"
      >
        <ReactBootstrap.Form className="loginForm">
          <ReactBootstrap.FormGroup
            controlId="formBasicEmail"
            id="emailFormGrp"
          >
            <ReactBootstrap.Form.Label id="emailLabel">
              Email address
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="email"
              placeholder="Enter email"
              id="email-input"
            />
            <ReactBootstrap.Form.Text id="emailShare">
              We'll never share your email.
            </ReactBootstrap.Form.Text>
          </ReactBootstrap.FormGroup>

          <ReactBootstrap.Form.Group
            controlId="formBasicPassword"
            id="PWFormGrp"
          >
            <ReactBootstrap.Form.Label id="PWLabel">
              Password
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="password"
              placeholder="Password"
              id="password-input"
            />
          </ReactBootstrap.Form.Group>
          <ReactBootstrap.Button
            id="loginBtn"
            variant="primary"
            size="sm"
            type="submit"
            onClick={(e) => {
              formSubmit(e);
            }}
          >
            Login
          </ReactBootstrap.Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Container>
    </div>
  );
}

export default Login;
