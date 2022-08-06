import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";

const Home = () => {
    const navigate = useNavigate();
    const [myInfo, setMyInfo] = useState({});
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      async function getMyInfo() {
        const myReturnedInfo = await getProfile(token);
        setMyInfo(myReturnedInfo);
      }
      getMyInfo();
    }, []);

    return (
        <div>
          {localStorage.getItem("loggedIn") ? (
            <>
              <h1>Welcome to Fitness Tracker</h1>
              {myInfo && myInfo.username ? (
                <h3>{`Logged in as ${myInfo.username}`}</h3>
              ) : null}
              <button
                onClick={() => {
                  navigate("/My_Routines");
                }}
              >
                VIEW YOUR ROUTINES
              </button>
            </>
          ) : (
            <>
              <h1>Welcome to Fitness Trac.kr</h1>
              <button
                onClick={() => {
                  navigate("/Login");
                }}
              >
                PLEASE LOGIN
              </button>
            </>
          )}
        </div>
      );
    };

export default Home;
