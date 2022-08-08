import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPerson } from "../api";

const Register = () => {
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (regPassword !== confirmPassword) {
      alert("Passwords don't match!");
      setRegPassword("");
      setConfirmPassword("");
    } else {
      registerPerson(event);
      setRegUsername("");
      setRegPassword("");
      setConfirmPassword("");
      alert("Registration successful! Please login");
      navigate("/Login");
    }
  };

  const userNameChange = (event) => {
    setRegUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setRegPassword(event.target.value);
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Register User</h2>
                  <p className="text-white-50 mb-5">
                    Please enter a username and password
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        name="username"
                        className="form-control form-control-lg"
                        onChange={userNameChange}
                        required={true}
                        value={regUsername}
                      />
                      <label className="form-label">Username</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        minLength="8"
                        required={true}
                        onChange={passwordChange}
                        value={regPassword}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        minLength="8"
                        required={true}
                        onChange={confirmPasswordChange}
                        value={confirmPassword}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Retype Password
                      </label>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
