import React from "react";
import { useNavigate } from "react-router";

const Header = ({loggedIn, setLoggedIn}) => {
    let navigate = useNavigate();
    const handleClickLogout = (event) => {
        event.preventDefault();
        setLoggedIn(false);
        localStorage.clear();
        navigate("/");
      };

    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" onClick={() => { navigate("/"); }}>Fitness Trac.kr</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            {localStorage.getItem("loggedIn") ? (
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="routines">Routines</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="activities">Activities</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="my_routines">My Routines</a>
                        </li>
                    </ul>
                        <button className="navbutton" onClick={handleClickLogout}>Logout</button>
                </div>
            ) : (
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="routines">Routines</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="activities">Activities</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="login">Login</a>
                        </li>
                    </ul>
                </div>
            )}

        </div>
        </nav>
    )
};

export default Header;
