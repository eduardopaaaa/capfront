import { React, useState, useEffect } from "react";
import axios from "axios";
import "./CurrentBugs.css"





function CurrentBug() {

  const [addBug, setAddBug] = useState(true)

  return (
    <div className='currentbugs'>
      
      <div className="ticket1"> 
        <p className="closeticket btn btn-outline-danger"> Close Ticket </p>
        <p>Assigned: <span> Dev Name </span> </p>
        <p>Priority: <span> High </span> </p>
        <p>Description: </p>
        <p className="dtext"> description of the bug in question</p>
        <hr/>

      </div>

      <div className="ticket1"> 
        <p className="closeticket btn btn-outline-danger"> Close Ticket </p>
        <p>Assigned: <span> Dev Name </span> </p>
        <p>Priority: <span> High </span> </p>
        <p>Description: </p>
        <p className="dtext"> description of the bug in question</p>
        <hr/>

      </div>

      <div className="ticket1"> 
        <p className="closeticket btn btn-outline-danger"> Close Ticket </p>
        <p>Assigned: <span> Dev Name </span> </p>
        <p>Priority: <span> High </span> </p>
        <p>Description: </p>
        <p className="dtext"> description of the bug in question</p>
        <hr/>

      </div>
      
    </div>
  );
}

export default CurrentBug;