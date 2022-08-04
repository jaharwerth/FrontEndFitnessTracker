import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({routineId}) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const deleteMyRoutine = await deleteRoutine(routineId, token);
    alert("Routine has been Deleted!")
    return deleteMyRoutine;
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Routine</button>
    </div>
  );
};

export default DeleteRoutine;
