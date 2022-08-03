import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getActivities, newActivity } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchActivities() {
      const returnActivities = await getActivities();
      setAllActivities(returnActivities.reverse());
    }
    fetchActivities();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const myActivity = await newActivity(token, name, description);

    if (myActivity.error) {
      setError(myActivity);
      setName("");
      setDescription("");
    } else {
      setAllActivities([myActivity, ...allActivities])
      setError(null);
      setName("");
      setDescription("");
    }
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h1>Activities</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required={true}
          onChange={nameChange}
          value={name}
        />
        <input
          type="text"
          name="description"
          placeholder="Description*"
          required={true}
          onChange={descriptionChange}
          value={description}
        />
        <button type="submit">ADD ACTIVITY</button>
      </form>
      {error && error.message ? <h3>{error.message}</h3> : null}
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
