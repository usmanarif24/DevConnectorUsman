import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
    </Fragment>
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
  </Router>
);

export default App;
