import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Sponsorship from './Sponsorship/Sponsorship';
import MainMap from './MainMap/MainMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/sponsorship">
            <Sponsorship />
          </Route>
          <Route path="/">
            <MainMap />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
