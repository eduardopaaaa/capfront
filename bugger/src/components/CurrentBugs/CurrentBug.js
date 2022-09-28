import { React } from "react";

import "./CurrentBugs.css"

// import Edit from "/Users/hacker/capfront/bugger/src/components/Edits/Edit.js";



export default function CurrentBug({
  data,
	handleDelete,
  
 
}) {

  
  // const [addBug, setAddBug] = useState(false);

    

    
    return (
      <div>
        
      <div key={data._id} className='currentbugs' >
      {data.map((item) => {
        return (
          
        <div className="ticket1" >
          
          <p id={data._id}> Assigned: <span> {item.Assigned} </span> </p>
          <p id={data._id}> Priority: <span> {item.Priority} </span> </p>
          <p id={data._id}> Description: {item.Description} </p>
          <hr/>

          <button className="closeticket btn btn-outline-danger" onClick={() => {handleDelete(item)}}> Close Ticket </button>
          
        </div>
        
        )
        })}
          
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