import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Detail from "../src/pages/Detail";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail:index" exact element={<Detail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
