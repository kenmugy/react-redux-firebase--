import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

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
        </Switch>
      </>
    </Router>
  );
}

export default App;
