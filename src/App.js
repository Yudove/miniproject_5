import React from "react";
import { Routes, Route } from "react-router-dom";
import './pages/App.css';

import styled from "styled-components";
import Detail from "./pages/Detail";

const Container = styled.div`
padding-top: 30px;

`

function App() {
  return (
    <>
    <Container>
        <Detail />
    </Container>
    </>
  );
}

export default App;
