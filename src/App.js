import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Links from './pages/Links/Links';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/links" exact></Redirect>
          <Route path="/links" component={Links}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
