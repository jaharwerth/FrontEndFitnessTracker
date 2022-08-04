import React, { useState } from "react";
import { attachActivity } from "../api";

const DropDown = ({ routineId, allActivities }) => {
  const [selected, setSelected] = useState({});
  //I know these variable probably aren't defined correctly but I wanted to send in something so you could see the error
  const activityId = allActivities.id;
  const count = allActivities.count;
  const duration = allActivities.duration;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await attachActivity(routineId, activityId, count, duration);
    return result;
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
              <>
                {/* Warning: Each child in a list should have a unique "key" prop. */}
                <option key={index} value={activity.id}>
                  {activity.name}
                </option>
              </>
            );
          })}
        </select>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default DropDown;
