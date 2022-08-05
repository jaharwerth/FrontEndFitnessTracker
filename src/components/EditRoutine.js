import React, { useState } from "react";
import { editRoutine } from "../api";

const EditRoutine = ({ routineId, routine, setThisRoutine }) => {
  const [name, setName] = useState(routine.name);
  const [goal, setGoal] = useState(routine.goal);
  const [error, setError] = useState(null);
  const [editForm, setEditForm] = useState(false);

  const handleEdit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const updateMyRoutine = await editRoutine(routineId, token, name, goal);

    if (updateMyRoutine.error) {
      setError(updateMyRoutine);
      setName("");
      setGoal("");
    } else {
      setEditForm(false);
      setError(null);
      setThisRoutine({
        ...routine,
        name: updateMyRoutine.name,
        goal: updateMyRoutine.goal,
      });
      return updateMyRoutine;
    }
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const goalChange = (event) => {
    setGoal(event.target.value);
  };

  const editFormFunc = (routine) => {
    return (
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="name"
          defaultValue={routine.name}
          required={true}
          onChange={nameChange}
        />
        <input
          type="text"
          name="goal"
          defaultValue={routine.goal}
          required={true}
          onChange={goalChange}
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
          Edit Routine
        </button>
      </div>
    );
  };

  return (
    <div>
      {editForm ? cancelEdit() : regEdit()}
      {editForm ? editFormFunc(routine) : null}
      {error && error.message ? `Routine name aleady exists!` : null}
    </div>
  );
};

export default EditRoutine;
