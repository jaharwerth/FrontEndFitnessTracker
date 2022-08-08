import React, { useState } from "react";
import { DeleteRoutine, EditRoutine, DropDown, SingleActivity } from "./";

const SingleRoutine = ({ routine, allActivities }) => {
  const [thisRoutine, setThisRoutine] = useState(routine);

  return (
    <>
      {thisRoutine ? (
        <div className="card routinesCard">
          <div className="card-body">
            <h5 className="card-title text-center">{thisRoutine.name}</h5>
            <div className="card-text">
              <b>User:</b> {thisRoutine.creatorName}
            </div>
            <div>
              <b>Goal: </b> {thisRoutine.goal}
            </div>
            <div className="editDeleteButtons">
              <EditRoutine
                routineId={thisRoutine.id}
                routine={thisRoutine}
                setThisRoutine={setThisRoutine}
              />
              <DeleteRoutine
                routineId={thisRoutine.id}
                setThisRoutine={setThisRoutine}
              />
            </div>
            <DropDown
              routineId={thisRoutine.id}
              thisRoutine={thisRoutine}
              setThisRoutine={setThisRoutine}
              allActivities={allActivities}
            />
            <div className="activitiesContainer">
              {thisRoutine.activities && thisRoutine.activities.length ? (
                thisRoutine.activities.map((activity, index) => {
                  return (
                    <SingleActivity
                      key={`routine${index}`}
                      activity={activity}
                    />
                  );
                })
              ) : (
                <div>
                  <div className="card-body">
                    <h5 className="card-title">No activities to display</h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleRoutine;
