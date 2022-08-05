import React, { useState } from "react";
import { editActivity } from "../api";

const EditActivity = ({ thisActivity, setThisActivity }) => {
  const { routineActivityId } = thisActivity;
  const [count, setCount] = useState(thisActivity.count);
  const [duration, setDuration] = useState(thisActivity.duration);
  const [error, setError] = useState(null);
  const [editForm, setEditForm] = useState(false);

  const handleEdit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const result = await editActivity(
      routineActivityId,
      token,
      duration,
      count
    );

    if (result.error) {
      setError(result);
      setCount("");
      setDuration("");
    } else {
      setEditForm(false);
      setError(null);
      setThisActivity({
        ...thisActivity,
        count: result.count,
        duration: result.duration,
      });
      return result;
    }
  };

  const countChange = (event) => {
    setCount(event.target.value);
  };

  const durationChange = (event) => {
    setDuration(event.target.value);
  };

  const editFormFunc = (thisActivity) => {
    return (
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="count"
          defaultValue={thisActivity.count}
          required={true}
          onChange={countChange}
        />
        <input
          type="text"
          name="duration"
          defaultValue={thisActivity.duration}
          required={true}
          onChange={durationChange}
        />
        <button type="submit">UPDATE</button>
      </form>
    );
  };

  const cancelEdit = () => {
    return (
      <div>
        <button
          onClick={() => {
            setEditForm(false);
            setError("");
          }}
        >
          Cancel Edit
        </button>
      </div>
    );
  };

  const regEdit = () => {
    return (
      <div>
        <button
          onClick={() => {
            setEditForm(true);
          }}
        >
          Edit Activity
        </button>
      </div>
    );
  };

  return (
    <div>
      {editForm ? cancelEdit() : regEdit()}
      {editForm ? editFormFunc(thisActivity) : null}
      {error && error.message ? `Routine name aleady exists!` : null}
    </div>
  );
};

export default EditActivity;
