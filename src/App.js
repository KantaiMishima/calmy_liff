import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Sponsorship from './Sponsorship/Sponsorship';
import MainMap from './MainMap/MainMap';
import { database, initializeApp } from 'firebase';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Your web app's Firebase configuration
    initializeApp({
      apiKey: "AIzaSyBoPavi0RC0j-GgU6WJdfvHp_piCAsUjNU",
      authDomain: "restroom0721.firebaseapp.com",
      databaseURL: "https://restroom0721.firebaseio.com",
      projectId: "restroom0721",
      storageBucket: "restroom0721.appspot.com",
      messagingSenderId: "724664849058",
      appId: "1:724664849058:web:057517e887d818d390fdfb",
      measurementId: "G-ZWVCNBXRRL"
    });
  } ,[])

  useEffect(() => {
      database().ref('Test/Cust/2019-09-29').off()
      database().ref('Test/Cust/2019-09-29').on('value', snapshot => {
        setIsOpen(!isOpen);
      });
  }, [isOpen]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/sponsorship">
            <Sponsorship />
          </Route>
          <Route path="/">
            <MainMap isOpen={isOpen} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
