import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import CreateProfile from "./Components/profile-form/CreateProfile";
import Profiles from "./Components/profiles/Profiles";
import EditProfile from "./Components/profile-form/EditProfile";
import AddExperience from "./Components/profile-form/AddExperience";
import AddEducation from "./Components/profile-form/AddEducation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/Layout/Alert";
import PrivateRoute from "./Components/Routing/PrivateRoute";
//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./Components/Dashboard/Dashboard";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
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
            <Route exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute
              exact
              path='/add-experience'
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path='/add-education'
              component={AddEducation}
            />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
