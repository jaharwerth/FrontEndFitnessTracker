import React from "react";
import { removeActivity } from "../api";

const RemoveActivity = ({ thisActivity, setThisActivity }) => {
  const { routineActivityId } = thisActivity;

  const handleDelete = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const result = await removeActivity(routineActivityId, token);

    if (result) {
      setThisActivity(null);
      alert("Activity has been removed!");
    } else {
      alert("There was an error removing your activity!");
    }
  };

  return (
    <div>
      <button className="btn btn-dark btn-sm" onClick={handleDelete}>
        Remove Activity
      </button>
    </div>
  );
};

export default RemoveActivity;
