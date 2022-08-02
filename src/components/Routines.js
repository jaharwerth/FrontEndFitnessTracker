import React, { useState, useEffect } from "react";
import { getRoutines } from "../api"

const Routines = ({ }) => {
    const [allRoutines, setAllRoutines] = useState([])

    useEffect(() => {
        async function fetchRoutines() {
            const returnRoutines = await getRoutines();
            setAllRoutines(returnRoutines)
        }
        fetchRoutines()
    }, [] )
          console.log(allRoutines, "this is allRoutines")
    return (
        <div>
            <h1>Routines</h1>
  
            <div> {allRoutines.length ?
                allRoutines.map((routine, index) => {
                    return (
                        <div key={index}>
                            <>
                                <h2>{routine.name}</h2>
                                <div>
                                    <b>Goal: </b>
                                    {routine.goal}
                                </div>
                                <div>
                                    <b>User:</b> {routine.creatorName}
                                </div>
                                <div>
                                    Activities
                                </div>
                                {/* <div>
                                    <b>Name</b> {routine.activity.name}
                                </div>
                                <div>
                                    <b>Description</b> {routine.activity.description}
                                </div>
                                <div>
                                    <b>Duration</b> {routine.activity.duration}
                                </div>
                                <div>
                                    <b>Count</b> {routine.activity.count}
                                </div> */}
                            </>
                        </div>
                    );
                })
                : null}
            </div>

        </div>
    )

};

export default Routines;
