import { React, useState, useEffect } from "react";
import axios from "axios";

import AddBug from './components/AddBugs/AddBug';
import CurrentBug from './components/CurrentBugs/CurrentBug';

import './App.css';


function App() {

  const [addBug, setAddBug] = useState(false)

  return (
    <div className='App'>
      <h1>BUGGER</h1>
      <div className="maincontainer">{addBug ? <AddBug/> : <CurrentBug/>}</div>
      <div>
        <button name="curappbtn" className=" curappbtn appbtn btn btn-outline-light"> Current Bugs </button>
        
        <button name="addappbtn" className=" addappbtn appbtn btn btn-outline-warning"> Add Bugs </button>
      </div>

    </div>
  );
}

export default App;