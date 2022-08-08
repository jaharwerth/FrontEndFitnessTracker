import React, { useState } from "react";
import { EditActivity, RemoveActivity } from "./";

const SingleActivity = ({ activity }) => {
  const [thisActivity, setThisActivity] = useState(activity);

  return (
    <>
      {thisActivity ? (
        <div className="card-footer">
          <div className="text-center">
            <b>{thisActivity.name}</b>
          </div>
          <div>
            <b>Description:</b> {thisActivity.description}
          </div>
          <div>
            <b>Duration:</b> {thisActivity.duration}
          </div>
          <div>
            <b>Count:</b> {thisActivity.count}
          </div>
          <div className="editDeleteButtons">
            <EditActivity
              thisActivity={thisActivity}
              setThisActivity={setThisActivity}
            />
            <RemoveActivity
              thisActivity={thisActivity}
              setThisActivity={setThisActivity}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleActivity;
