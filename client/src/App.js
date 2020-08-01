import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/Layout/Alert";
//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
      </Fragment>
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Router>
  </Provider>
);

export default App;
