import { React, useState, useEffect } from "react";
import axios from "axios";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import "./AddBugs.css"
import { ListItemSecondaryAction } from "@mui/material";


const AddBug = ({
    handlesetDescription,
    handlesetPriority,
	handleNew,
	handleAssigned
}) => {


      

  return (

    <div className='addbugs'>
    <form onSubmit={handleNew}>
        <label> 
            Bug Description <input onChange={handlesetDescription} placeholder="Example: POST Route not working" className="form-control"type='text'/>
        </label>
        <label>
            Assign
            
            <select onChange={handleAssigned} className=" btn btn-outline-light dropdown-toggle" data-toggle="dropdown" name='Dev' id='Dev'> 
                <option value="">  </option>
                <option value="dev1"> dev1 </option>
                <option value="dev2"> dev2 </option>
                <option value="dev3"> dev3 </option>
                <option value="dev4"> dev4 </option>
        
            </select>
            
        </label>
        <label>
            Priority
            <select onChange={handlesetPriority} className=" btn btn-outline-light dropdown-toggle" data-toggle="dropdown" name='Prio' id='Prio'> 
                <option value="">  </option>
                <option value="Low"> Low </option>
                <option value="Medium"> Medium </option>
                <option value="High"> High </option>
                <option value="YESTERDAY"> ASAP </option>
        
            </select>
        </label>
        <button className=" btn btn-primary "type="submit">CREATE BUG REPORT</button>

    </form>
    </div>
  );
}

export default AddBug;