import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { newRoutine, getUserRoutines, deleteRoutine } from "../api";

const My_Routines = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [userRoutines, setUserRoutines] = useState([])

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUserRoutines() {
      const username = localStorage.getItem("username");
      const returnUserRoutines = await getUserRoutines(username, token);
      setUserRoutines(returnUserRoutines);
    }
    fetchUserRoutines();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Routine has been Added!");
    const myRoutine = await newRoutine(token, name, goal);
    navigate("/my_routines");
    return myRoutine;
  };

  const handleDelete = async(event) =>{
    event.preventDefault()
    const deleteMyRoutine = await deleteRoutine(routineId, token)
  }

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const goalChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div>
      <h1>Add New Routine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required={true}
          onChange={nameChange}
        />
        <input
          type="text"
          name="goal"
          placeholder="Goal*"
          required={true}
          onChange={goalChange}
        />
        <button type="submit">CREATE</button>
      </form>

      <h1> My Routines </h1>
      <div>
        {userRoutines.length
          ? userRoutines.map((routine, index) => {
            return (
              <div className="redBox" key={index}>
                <>
                  <h3>{routine.name}</h3>
                  <div>
                    <b>Goal: </b> {routine.goal}
                  </div>
                  <div>
                    <b>User:</b> {routine.creatorName}
                  </div>
                  <div>Activities</div>
                  {routine.activities.map((activity, index) => {
                    return (
                      <div className="greenBox" key={index}>
                        <div>
                          <b>Name</b> {activity.name}
                        </div>
                        <div>
                          <b>Description</b> {activity.description}
                        </div>
                        <div>
                          <b>Duration</b> {activity.duration}
                        </div>
                        <div>
                          <b>Count</b> {activity.count}
                        </div>
                      </div>
                    );
                  })}
                  <button onClick={handleDelete}>Delete Routine</button>
                </>
              </div>
            );
          })
          : null}
      </div>
    </div>
  )

};

export default My_Routines;
