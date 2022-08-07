import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";
import { Login } from "./"

const Home = ({setLoggedIn}) => {
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
            <div className="text-center">
              {myInfo && myInfo.username ? (
              <h1 className="text-center">{`Welcome to Fitness Trac.kr ${myInfo.username}`}</h1>
              ) : null}
              <button
                onClick={() => {
                  navigate("/My_Routines");
                }}
              >
                VIEW YOUR ROUTINES
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-center">Welcome to Fitness Trac.kr</h1>
              <Login setLoggedIn={setLoggedIn}/>              
            </>
          )}
        </div>
      );
    };

export default Home;
