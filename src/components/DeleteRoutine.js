import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({ routineId, setThisRoutine }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const deleteMyRoutine = await deleteRoutine(routineId, token);

    if (deleteMyRoutine) {
      setThisRoutine(null);
      alert("Routine has been Deleted!");
    } else {
      alert("There was an error deleting your routine!");
    }
  };

  return (
    <div>
      <button className="btn btn-dark btn-sm" onClick={handleDelete}>
        Delete Routine
      </button>
    </div>
  );
};

export default DeleteRoutine;
