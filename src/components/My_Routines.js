import React, { useState, useEffect } from "react";
import { newRoutine, getUserRoutines, getActivities } from "../api";
import { DeleteRoutine, EditRoutine, DropDown } from "./";

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
      <h1>Add New Routine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required={true}
          onChange={nameChange}
          value={name}
        />
        <input
          type="text"
          name="goal"
          placeholder="Goal*"
          required={true}
          onChange={goalChange}
          value={goal}
        />
        <button type="submit">CREATE</button>
      </form>
      {error && error.message ? `Routine name aleady exists!` : null}
      <h1> My Routines </h1>
      <div>
        {userRoutines.length
          ? userRoutines.map((routine, index) => {
              return (
                <div className="redBox" key={index}>
                  <>
                    <h3>{routine.name}</h3>
                    <div>
                      <b>User:</b> {routine.creatorName}
                    </div>
                    <div>
                      <b>Goal: </b> {routine.goal}
                    </div>
                    <EditRoutine routineId={routine.id} routine={routine} />
                    <DeleteRoutine routineId={routine.id} />
                    <DropDown routineId={routine.id} allActivities={allActivities} />
                    {routine.activities && routine.activities.length
                      ? routine.activities.map((activity, index) => {
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
                        })
                      : null}
                    
                  </>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default My_Routines;
