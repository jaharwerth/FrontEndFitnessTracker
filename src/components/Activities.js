import React, { useState, useEffect } from "react";
import { getActivities, newActivity } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
      alert("Activity already exists!");
      setName("");
      setDescription("");
    } else {
      setAllActivities([myActivity, ...allActivities]);
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
      <h1 className="text-center">Activities</h1>
      {localStorage.getItem("loggedIn") ? (
        <div className="activitiesFormContainer">
          <h6 className="text-center">Add New Activity</h6>
          <form className="text-center" onSubmit={handleSubmit}>
            <input
              className="activitiesNameInput"
              type="text"
              name="name"
              placeholder="Name*"
              required={true}
              onChange={nameChange}
              value={name}
            />
            <input
              className="activitiesDescriptionInput"
              type="text"
              name="description"
              placeholder="Description*"
              required={true}
              onChange={descriptionChange}
              value={description}
            />
            <button type="submit" className="btn btn-outline-primary btn-sm">
              ADD ACTIVITY
            </button>
          </form>
        </div>
      ) : null}
      <div className="allActivitiesContainer">
        {allActivities.length ? (
          allActivities.map((activity, index) => {
            return (
              <div key={index}>
                <div className="card activitiesCard">
                  <div className="card-body">
                    <h5 className="card-title text-center">{activity.name}</h5>

                    <p className="card-text">
                      <b>Description:</b> {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : null}
      </div>
    </div>
  );
};

export default Activities;
