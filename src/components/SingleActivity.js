import React, { useState } from "react";
import { EditActivity, RemoveActivity } from "./";

const SingleActivity = ({ activity }) => {
  const [thisActivity, setThisActivity] = useState(activity);

  return (
    <>
      {thisActivity ? (
        <div className="greenBox">
          <div>
            <b>Name</b> {thisActivity.name}
          </div>
          <div>
            <b>Description</b> {thisActivity.description}
          </div>
          <div>
            <b>Duration</b> {thisActivity.duration}
          </div>
          <div>
            <b>Count</b> {thisActivity.count}
          </div>
          <EditActivity thisActivity={thisActivity} setThisActivity={setThisActivity} />
          <RemoveActivity thisActivity={thisActivity} setThisActivity={setThisActivity} />
        </div>
      ) : null}
    </>
  );
};

export default SingleActivity;
