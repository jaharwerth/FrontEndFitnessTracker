import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmLogin } from "../api";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await confirmLogin(username, password);

    if (result && result.token) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.user.username)
      setUsername("");
      setPassword("");
      navigate("/");
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
    } else {
      alert("Incorrect Username or Password");
    }
  };

  const handleClick = () => {
    navigate("/Register")
  }

  const userNameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
<section>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white">
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your username and password!</p>
              <form onSubmit={handleSubmit}>
              <div className="form-outline form-white mb-4">
                <input type="text" className="form-control form-control-lg" onChange={userNameChange}/>
                <label className="form-label">Username</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={passwordChange} />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              {/* not functional but it's pretty */}

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </form>
            </div>

            <div>
              <p className="mb-0">Don't have an account?
              <button type="button" onClick={handleClick}>Sign up here!</button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;
