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
          {/* <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
          <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
        </ReactBootstrap.Form.Group> */}

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

      {/* <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Login Form</h2>
            <form className="login">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <ReactBootstrap.Button
                type="submit"
                className="btn btn-default"
                onClick={(e) => {
                  formSubmit(e);
                }}
              >
                Login
              </ReactBootstrap.Button>
            </form>
            <br />
            <p>
              Or sign up <a href="/signup.html">here</a>
            </p>
          </div>
        </div>
      </div>
      <script src={login} /> */}
    </div>
  );
}

export default Login;
