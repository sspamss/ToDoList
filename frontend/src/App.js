import './App.css';
import React from 'react';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import ToggleSlider from './pages/ToggleSlider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <Router>
      <Helmet>
        <title>The Fridge List</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={ToggleSlider}/>
        <Route exact path="/forgot-password" component={ForgotPasswordPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/verify" component={ToggleSlider}/>
      </Switch>
    </Router>
  );
}

export default App;
