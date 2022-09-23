import { React, useState, useEffect } from "react";
import axios from "axios";

import AddBug from './components/AddBugs/AddBug';
import CurrentBug from './components/CurrentBugs/CurrentBug';

import './App.css';


function App() {

  const [addBug, setAddBug] = useState(true)

  return (
    <div className='App'>
      <h1>BUGGER</h1>
      <div className="maincontainer">{addBug ? <AddBug/> : <CurrentBug/>}</div>
      <div>
        <button className="btn btn-primary"> Current Bugs </button>
        <button className="btn btn-outline-light"> Add Bugs </button>
      </div>

    </div>
  );
}

export default App;