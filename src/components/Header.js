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
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" onClick={() => { navigate("/"); }}>Fitness Trac.kr</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            {localStorage.getItem("loggedIn") ? (
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="routines">Routines</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="activities">Activities</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="my_routines">My Routines</a>
                        </li>
                    </ul>
                        <button className="btn btn-outline-dark btn-rounded" onClick={handleClickLogout}>Logout</button>
                </div>
            ) : (
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="routines">Routines</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="activities">Activities</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="login">Login</a>
                        </li>
                    </ul>
                </div>
            )}

        </div>
        </nav>
    )
};

export default Header;
