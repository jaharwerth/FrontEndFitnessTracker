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
      <h1>Routines</h1>
      <div>
        {allRoutines.length
          ? allRoutines.map((routine, index) => {
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
