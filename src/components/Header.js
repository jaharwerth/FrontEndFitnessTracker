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
        <div>
            <h1 onClick={() => { navigate("/"); }}>Fitness Trac.kr</h1>
            {localStorage.getItem("loggedIn") ? (
                <>
                    <div onClick={() => { navigate("/routines"); }}>Routines</div>
                    <div onClick={() => { navigate("/activities"); }}>Activities</div>
                    <div onClick={() => { navigate("/my_routines"); }}>My Routines</div>
                    <button className="navbutton" onClick={handleClickLogout}>Logout</button>
                </>
            ) : (
                <>
                    <div onClick={() => { navigate("/routines"); }}>Routines</div>
                    <div onClick={() => { navigate("/activities"); }}>Activities</div>
                    <div onClick={() => { navigate("/login"); }}>Login</div>
                </>
            )}

        </div>
    )
};

export default Header;
