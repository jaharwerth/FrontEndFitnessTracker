import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Register,
  Login,
  Activities,
  Routines,
  My_Routines,
  Header,
} from "./";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home setLoggedIn={setLoggedIn} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Routines" element={<Routines />} />
        <Route path="/My_Routines" element={<My_Routines />} />
      </Routes>
    </div>
  );
};

export default App;
