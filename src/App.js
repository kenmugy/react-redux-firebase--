import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
