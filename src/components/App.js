import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home, Register, Login, Activities, Routines, My_Routines, Header} from "./";

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Home />
                <Register />
                <Login />
                <Activities />
                <Routines />
                <My_Routines />
            </Routes>
        </div>
    )
}

export default App;
