import React, { useState } from "react";
import { DeleteRoutine, EditRoutine, DropDown, SingleActivity } from "./";

const SingleRoutine = ({ routine, allActivities, setAllActivities }) => {
  const [thisRoutine, setThisRoutine] = useState(routine);

  return (
    <>
      {thisRoutine ? (
        <div>
          <div className="redBox">
            <h3>{thisRoutine.name}</h3>
            <div>
              <b>User:</b> {thisRoutine.creatorName}
            </div>
            <div>
              <b>Goal: </b> {thisRoutine.goal}
            </div>
            <EditRoutine
              routineId={thisRoutine.id}
              routine={thisRoutine}
              setThisRoutine={setThisRoutine}
            />
            <DeleteRoutine
              routineId={thisRoutine.id}
              setThisRoutine={setThisRoutine}
            />
            <DropDown
              routineId={thisRoutine.id}
              thisRoutine={thisRoutine}
              setThisRoutine={setThisRoutine}
              allActivities={allActivities}
              setAllActivities={setAllActivities}
            />
            {thisRoutine.activities && thisRoutine.activities.length
              ? thisRoutine.activities.map((activity, index) => {
                  return (
                    <SingleActivity
                      key={`routine${index}`}
                      activity={activity}
                    />
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleRoutine;
