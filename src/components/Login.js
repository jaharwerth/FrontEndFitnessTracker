import React, {useState} from "react";
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
      <div id="login">
        <h1 className="title">Log In</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="boxes">
            <input
              className="input"
              type="text"
              name="username"
              placeholder="UserName"
              required={true}
              minLength="1"
              onChange={userNameChange}
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              required={true}
              minLength="8"
              onChange={passwordChange}
            />
            <button type="submit">Log In</button>
          </div>
        </form>
        <p onClick={handleClick}>Don't have account? Sign up here!</p>
      </div>
    );
  };

export default Login;
