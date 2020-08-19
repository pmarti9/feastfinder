import React from "react";

import * as ReactBootstrap from "react-bootstrap";
import signup from "../../Pages/js/signup.js";
import "./Register.css";

function Register() {
  return (
    <div>
      <div>
        <ReactBootstrap.Container
          className="justify-content-md-center"
          id="registerContainer"
        >
          <ReactBootstrap.Form id="registerForm">
            <ReactBootstrap.Row id="formTopRow">
              <ReactBootstrap.Col id="formTRLeft">
                <ReactBootstrap.FormGroup
                  controlId="formBasicEmail"
                  id="emailFormGrp">
                  <ReactBootstrap.Form.Label id="emailLabel">
                    Email address
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email-input"
                  />
              </ReactBootstrap.FormGroup>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col id="formTRRight">
                <ReactBootstrap.FormGroup
                  controlId="formBasicEmail"
                  id="nameFormGrp"
                >
                  <ReactBootstrap.Form.Label id="nameLabel">
                    Your Name
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="email"
                    placeholder="Your Name"
                    id="name-input"
                  />
                </ReactBootstrap.FormGroup>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row id="middleRow">
              <ReactBootstrap.Col id="middleRowCol">
              <ReactBootstrap.Form.Text id="emailShare">
                    We'll never share personal information.
                  </ReactBootstrap.Form.Text>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row id="formBottomRow">
              <ReactBootstrap.Col id="formBRLeft">
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
              </ReactBootstrap.Col>
              <ReactBootstrap.Col id="formBRRight">
                <ReactBootstrap.Form.Group
                  controlId="formBasicPassword"
                  id="confirmPWFormGrp"
                >
                  <ReactBootstrap.Form.Label id="confirmPWLabel">
                    Password
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    id="password-input"
                  />
                </ReactBootstrap.Form.Group>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>

            {/* <ReactBootstrap.Button
            id="registerBtn"
            variant="primary"
            size="sm"
            type="submit"
            onClick={(e) => {
              formSubmit(e);
            }}
            >
            Register
          </ReactBootstrap.Button> */}
          <ReactBootstrap.Row id="btnRow">
            <ReactBootstrap.Col id="btnRowCol">
            <ReactBootstrap.Button
              id="registerBtn"
              variant="primary"
              size="sm"
              type="submit"
            >
              Register
            </ReactBootstrap.Button>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          </ReactBootstrap.Form>
        </ReactBootstrap.Container>
      </div>
    </div>
  );
}

export default Register;
