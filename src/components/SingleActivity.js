import React, { useState } from "react";

const SingleActivity = ({ activity }) => {
  const [thisActivity, setThisActivity] = useState(activity);

  return (
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
    </div>
  );
};

export default SingleActivity;
