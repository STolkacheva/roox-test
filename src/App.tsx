import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserList } from "./components/UserList/UserList";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { SideBar } from "./components/SideBar/SideBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 665px;
  min-width: 320px;

  @media (max-width: 559px) {
    flex-flow: column;
    justify-content: start;
  }
 `;

 const App: React.FC = () => {

  return (
  <BrowserRouter>
    <Container>
      <SideBar/>
      <Routes>
        <Route path="/roox-test/" element={<UserList/>} />
        <Route path="/" element={<UserList/>} />
        <Route path="/:id" element={<UserInfo />} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
};

export { App };
