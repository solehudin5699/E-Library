import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/home'
import DetailPage from './pages/detail';
import Profile from './pages/Profile'
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <div>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/detail' component={DetailPage} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route path="/login" component={Signin} />
        <Route  path="/register" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
