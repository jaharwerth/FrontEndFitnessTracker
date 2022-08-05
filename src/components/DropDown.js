import React, { useState, useEffect } from "react";
import { getActivities, attachActivity } from "../api";

const DropDown = ({ routineId, allActivities, setAllActivities }) => {
  const [selected, setSelected] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await attachActivity(routineId, selected);

    if (result.error) {
      setError(result);
      // alert("activity has already been added");
    } else {
      setAllActivities([result, ...allActivities])
      setError(null);
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <div>
        <b>Activities:</b>
      </div>
      <form onSubmit={handleSubmit}>
        <select name="activities" onChange={handleChange}>
          <option>Choose Activity to Attach</option>
          {allActivities.map((activity, index) => {
            return (
                <option key={`activity${index}`} value={activity.id}>
                  {activity.name}
                </option>
            );
          })}
        </select>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default DropDown;
 