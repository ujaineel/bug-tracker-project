import React from "react";
import {useSelector} from 'react-redux';
import Login from "./Views/Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from "./Views/Sidebar/Sidebar";
import ViewBugPage from "./Views/Pages/ViewBugs";
import CreateBug from "./Views/Components/Bug Create/bugForm";

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.loggedIn ? <Login /> : 
      <>
        <Sidebar />
        <Switch>
          <Route path="/viewbugs">
            <ViewBugPage />
          </Route>
          <Route path="/createbug"><div className="page-container"><CreateBug title="Create Bug" /></div></Route>
        </Switch>
      </>
    }
    </Router>
  );
}

export default App;
