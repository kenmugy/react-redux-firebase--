import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Layout';
import Dashboard from './components/Dashboard';
import { ProjectDetails, CreateProject } from './components/projects';
import { SignIn, SignUp } from './components/Auth';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/project/:id'>
            <ProjectDetails />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/create'>
            <CreateProject />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
