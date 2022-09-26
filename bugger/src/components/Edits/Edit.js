import React, { useState, useEffect } from "react";

export default function edit({
	post,
	handleAssigned,
	handlesetPriority,
	handlesetDescription,
	handleDelete,
	handleUpdate,
	bugToggle,
	editFunction,
}) {
	return (
		<>
			<div className='EditButtonClicked'>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						handleUpdate(post);
					}}
				>
					<label> 
            Bug Description:{""} <input onChange={handlesetDescription} placeholder={post.description}className="form-control"type='text'/>
        </label>
        <label>
            Assign: {""}
            
            <select onChange={handleAssigned} placeholder={post.assigned}className=" btn btn-outline-light dropdown-toggle" data-toggle="dropdown" name='Dev' id='Dev'> 
                <option value="dev1"> dev1 </option>
                <option value="dev2"> dev2 </option>
                <option value="dev3"> dev3 </option>
                <option value="dev4"> dev4 </option>
        
            </select>
            
        </label>
        <label>
            Priority: {""}
            <select onChange={handlesetPriority} placeholder={post.priority}className=" btn btn-outline-light dropdown-toggle" data-toggle="dropdown" name='Prio' id='Prio'> 
                <option value="Low"> Low </option>
                <option value="Medium"> Medium </option>
                <option value="High"> High </option>
                <option value="YESTERDAY"> YESTERDAY </option>
        
            </select>
        </label>
					<input className='btn btn-primary 'type='submit' value='Submit' />
					<button className='btn btn-danger'
						onClick={() => {
							bugToggle(post);
						}}
					>
						close
					</button>
				</form>
			</div>
		</>
	);
}
