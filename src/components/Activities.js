import React, { useState, useEffect } from "react";
import { getActivities } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      const returnActivities = await getActivities();
      setAllActivities(returnActivities);
    }
    fetchActivities();
  }, []);

  console.log(allActivities, "all activities")

  return (
    <div>
      <h1>Activities</h1>
      <div>
        {" "}
        {allActivities.length
          ? allActivities.map((activity, index) => {
              return (
                <div className="redBox" key={index}>
                  <div>
                    <b>{activity.name}</b>
                  </div>
                  <div>
                    <b>Description</b> {activity.description}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Activities;
