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
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your username and password!</p>
              <form onSubmit={handleSubmit}>
              <div class="form-outline form-white mb-4">
                <input type="text" class="form-control form-control-lg" onChange={userNameChange}/>
                <label class="form-label">Username</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" onChange={passwordChange} />
                <label class="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              {/* not functional but it's pretty */}

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </form>
            </div>

            <div>
              <p class="mb-0">Don't have an account?
              <button type="button" class="text-white-50 fw-bold" onClick={handleClick}>Sign up here!</button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>










    // <div id="login">
    //   <h1 className="title">Log In</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div class="row g-3 align-items-center">
    //       <div class="col-auto">
    //         <label class="col-form-label">Username</label>
    //       </div>
    //       <div class="col-auto">
    //         <input type="text" class="form-control" onChange={userNameChange}/>
    //       </div>
    //       <div class="col-auto">
    //       </div>
    //     </div>
    //     <div class="row g-3 align-items-center">
    //       <div class="col-auto">
    //         <label for="inputPassword6" class="col-form-label">Password*</label>
    //       </div>
    //       <div class="col-auto">
    //         <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" onChange={passwordChange}/>
    //       </div>
    //       <div class="col-auto">
    //       </div>
    //     </div>
    //     <button type="submit" class="btn btn-primary">Submit</button>
    //   </form>
    //   <button type="button" class="btn btn-light btn-sm" onClick={handleClick}>Don't have an account? Sign up here!</button>
    // </div>
  );
};

export default Login;
