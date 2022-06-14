import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import Detailpage from "./pages/Detailpage";

function App() {
 
    

  return (
    <Routes>
    <Route path="/detail/:id" element={<Detailpage/>} />
    </Routes>
  );
}

export default App;