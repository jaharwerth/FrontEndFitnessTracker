import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { newRoutine } from "../api";

const My_Routines = () => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        alert("Routine has been Added!");
        const myRoutine = await newRoutine(token, name, goal);
        navigate("/Routines");
        return myRoutine;
      };

      const nameChange = (event) => {
        setName(event.target.value);
      };
    
      const goalChange = (event) => {
        setGoal(event.target.value);
      };

    return (
        <div>
            <h1>Add New Routine</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                placeholder="Name*"
                required={true}
                onChange={nameChange}
                />
                <input 
                type="text"
                name="goal"
                placeholder="Goal*"
                required={true}
                onChange={goalChange}
                />
                <button type="submit">CREATE</button>
            </form>
        </div>
    )

};

export default My_Routines;
