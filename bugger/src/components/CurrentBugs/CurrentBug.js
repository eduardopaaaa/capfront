import { React, useState, useEffect } from "react";
import axios from "axios";
import "./CurrentBugs.css"

// import Edit from "/Users/hacker/capfront/bugger/src/components/Edits/Edit.js";



export default function CurrentBug({
  bugs,
	handleDelete,
 
}) {

  
  
  const [addBug, setAddBug] = useState(true)

  
    return (

      <div className='currentbugs'>
        
        <div className="ticket1"> 
  
          <p className="closeticket btn btn-outline-danger" onClick={(event) => {
                handleDelete(bugs._id);
              }}> Close Ticket </p>
  
              
  
          <p>Assigned: <span> {bugs.Assigned} </span> </p>
          <p>Priority: <span> {bugs.Priority} </span> </p>
          <p>Description: {bugs.Description} </p>
          <hr/>
  
        </div>
  
        
          
        </div>
    );

    
  
}




// //////////////////////////////////////////////////////////////
// Lines bellow are for future auth implementation...edit will not be available to the public on V1 of Bugger
// //////////////////////////////////////////////////////////////


// {/* <div
// 					id={`updateID${post._id}`}
// 					className={`updateForm ${editF ? "" : "hide"}`}
// 				>
// 					<Edit
// 						post={post}
// 						handleAssigned={handleAssigned}
//             handlesetPriority={handlesetPriority}
//             handlesetDescription={handlesetDescription}
// 						handleDelete={handleDelete}
// 						handleUpdate={handleUpdate}
// 						bugToggle={bugToggle}
// 						editF={editF}
// 					/>
// 				</div> */}

// {/* <p className="closeticket btn btn-outline-warning" onClick={() => {
// 							bugToggle(post);
// 						}}> Edit Ticket </p> */}


// const [editF, setEditF] = useState(false);

// 	const bugToggle = (post) => {
// 		editF ? setEditF(false) : setEditF(true);
// 	};

// props,
	// handleAssigned,
	// handlesetPriority,
	// handlesetDescription,
  // handleUpdate,
  // handleNew