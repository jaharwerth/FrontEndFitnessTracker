// Strange error that occurs at seemingly random intervals. If page appears broken, refresh until it shows up. Need to do a help ticket to figure out why that happens.
// DropDown.js:15 Uncaught TypeError: Cannot read properties of undefined (reading 'id')

import React, { useState, useEffect } from "react";
import { newRoutine, getUserRoutines, getActivities } from "../api";
import { SingleRoutine } from "./";

const My_Routines = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState(null);
  const [userRoutines, setUserRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUserRoutines() {
      const username = localStorage.getItem("username");
      const returnUserRoutines = await getUserRoutines(username, token);
      setUserRoutines(returnUserRoutines);
    }
    fetchUserRoutines();

    async function fetchActivities() {
      const returnActivities = await getActivities();
      setAllActivities(returnActivities.reverse());
    }
    fetchActivities();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await newRoutine(token, name, goal);

    if (result.error) {
      setError(result);
      setName("");
      setGoal("");
    } else {
      setUserRoutines([result, ...userRoutines]);
      setName("");
      setGoal("");
      setError(null);
    }
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const goalChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center"> My Routines </h1>
      <div className="routineFormContainer">
      <h6 className="text-center">Add New Routine</h6>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          className="routineNameInput"
          type="text"
          name="name"
          placeholder="Name*"
          required={true}
          onChange={nameChange}
          value={name}
        />
        <input
          className="routineGoalInput"
          type="text"
          name="goal"
          placeholder="Goal*"
          required={true}
          onChange={goalChange}
          value={goal}
        />
        <button className="btn btn-outline-primary btn-sm" type="submit">CREATE</button>
      </form>
      </div>
      {error && error.message ? `Routine name aleady exists!` : null}
      
      <div className="routinesContainer">
        {userRoutines.length
          ? userRoutines.map((routine, index) => {
              return (
                <SingleRoutine key={`routine${index}`} routine={routine} allActivities={allActivities} setAllActivities={setAllActivities} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default My_Routines;
