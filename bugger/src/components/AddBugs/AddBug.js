import { React, useState, useEffect } from "react";
import axios from "axios";

import "./AddBugs.css"


function AddBug() {

  const [addBug, setAddBug] = useState(true)

  return (
    <div className='addbugs'>
    <form>
        <label> 
            Bug Description <input placeholder="Example: POST Route not working" className="form-control"type='text'/>
        </label>
        <label>
            Assign
            
            <select className=" btn btn-outline-light dropdown-toggle" data-toggle="dropdown" name='Dev' id='Dev'> 
                <option value="dev1"> dev1 </option>
                <option value="dev2"> dev2 </option>
                <option value="dev3"> dev3 </option>
                <option value="dev4"> dev4 </option>
        
            </select>
            
        </label>
        <label>
            Priority
            <select className=" btn btn-outline-light dropdown-toggle" data-toggle="dropdown" name='Prio' id='Prio'> 
                <option value="Low"> Low </option>
                <option value="Medium"> Medium </option>
                <option value="High"> High </option>
                <option value="YESTERDAY"> YESTERDAY </option>
        
            </select>
        </label>
        <button className=" btn btn-primary "type="submit">Add Bug</button>

    </form>
    </div>
  );
}

export default AddBug;