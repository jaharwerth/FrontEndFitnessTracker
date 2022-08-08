import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";

const Routines = ({}) => {
  const [allRoutines, setAllRoutines] = useState([]);

  useEffect(() => {
    async function fetchRoutines() {
      const returnRoutines = await getRoutines();
      setAllRoutines(returnRoutines);
    }
    fetchRoutines();
  }, []);

  return (
    <div>
      <h1 className="text-center">Routines</h1>
      <div className="routinesContainer">
        {allRoutines.length
          ? allRoutines.map((routine, index) => {
              return (
                <div key={index}>
                  <>
                    <div className="card routinesCard">
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {routine.name}
                        </h5>
                        <div className="card-text">
                          <div>
                            <b>Goal:</b> {routine.goal}
                          </div>
                          <div>
                            <b>User:</b> {routine.creatorName}
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="card-title text-center">
                            <b>Activities</b>
                          </div>
                          <div className="activitiesContainer">
                            {routine.activities.map((activity, index) => {
                              return (
                                <ul
                                  className=" list-group list-group-light list-group-small"
                                  key={index}
                                >
                                  <li className="list-group-item px-4">
                                    <div className="text-center">
                                      <b>{activity.name}</b>
                                    </div>
                                    <div>
                                      <b>Description:</b> {activity.description}
                                    </div>
                                    <div>
                                      <b>Duration:</b> {activity.duration}
                                    </div>
                                    <div>
                                      <b>Count:</b> {activity.count}
                                    </div>
                                  </li>
                                </ul>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Routines;
