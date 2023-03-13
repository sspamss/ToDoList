
import './App.css';
import React from 'react';
import CardPage from './pages/CardPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" index element = {<LoginPage/>} />
      <Route path = "/cards" index element = {<CardPage/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;