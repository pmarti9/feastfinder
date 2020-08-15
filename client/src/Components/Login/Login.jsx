import React from "react";
import API from './../../Utils/api'
import "./Login.css";

function Login() {
  function formSubmit(e) {
    e.preventDefault()
    API.login({
      email: "",
      password: "password"
  }).then((response) => {
    console.log(response)
  

  })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" style={{ color: "white" }}>
          <h1>Feast Finder</h1>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Post Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Login Form</h2>
            <form className="logim">
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
            <button type="submit" className="btn btn-default" onClick={(e)=> {formSubmit(e)}}>
              Login
            </button>
          </form>
          <br />
          <p>
            Or sign up <a href="/signup.html">here</a>
          </p>
        </div>
     </div>
      
    </div>
    {/* <script src={login} /> */}
    </div>
  );
}

export default Login;
