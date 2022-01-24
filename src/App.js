import React from "react";
import {useSelector} from 'react-redux';
import Login from "./Views/Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from "./Views/Sidebar/Sidebar";
import ViewBugs from "./Views/Pages/ViewBugs";
import CreateBug from "./Views/Components/Bug Create/bugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.loggedIn ? <Login /> : 
      <>
        <Sidebar />
        <Switch>
          
          <Route path="/viewbugs">
            <ViewBugs />
          </Route>
          <Route path="/createbug">
            <div className="page-container">
              <CreateBug title="Create Bug" />
            </div>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </>
    }
    </Router>
  );
}

export default App;
