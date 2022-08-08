import React, { useState, useEffect } from "react";
import { attachActivity } from "../api";

const DropDown = ({
  routineId,
  thisRoutine,
  setThisRoutine,
  allActivities,
}) => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (allActivities) {
      setSelected([
        allActivities[0].id,
        allActivities[0].name,
        allActivities[0].description,
      ]);
    }
  }, [allActivities]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await attachActivity(routineId, selected[0]);

    if (result.error) {
      setError(result);
      alert("Activity already attached!");
    } else {
      setError(null);
      result.name = selected[1];
      result.description = selected[2];
      setThisRoutine({
        ...thisRoutine,
        activities: [...thisRoutine.activities, result],
      });
      alert("Activity has been added!");
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value.split(","));
  };

  return (
    <div>
      <div>
        <b>Activities:</b>
      </div>
      <form onSubmit={handleSubmit}>
        <select className="dropdown" name="activities" onChange={handleChange}>
          <option>Choose Activity</option>
          {allActivities.map((activity, index) => {
            return (
              <option
                key={`activity${index}`}
                value={`${activity.id},${activity.name},${activity.description}`}
              >
                {activity.name}
              </option>
            );
          })}
        </select>
        <button className="btn btn-outline-primary btn-sm" type="submit">
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default DropDown;
