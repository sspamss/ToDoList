
import './App.css';
import React from 'react';
import CardPage from './pages/CardPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" index element = {<LoginPage/>} />
        <Route path = "/forgot-password" element = {<ForgotPasswordPage/>} />
        <Route path = "/cards" index element = {<CardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;