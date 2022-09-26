import React, { useState, useEffect } from "react";
import Edit from "/Users/hacker/capfront/bugger/src/components/Edits/Edit.js";
export default function Post({
	post,
	handleAssigned,
	handlesetPriority,
	handlesetDescription,
	handleDelete,
	handleUpdate,
}) {
	const [editF, setEditF] = useState(false);

	const bugToggle = (post) => {
		editF ? setEditF(false) : setEditF(true);
	};
	return (
		<div className='postImage' key={post._id}>
			<div>
				<p>{post.Assigned}</p>
				<p>{post.Description}</p>
				<p>{post.Priority}</p>
			</div>
			<div className="interactions">
				<div className='editDelete'>
					<p
						className='fa fa-edit'
						onClick={() => {
							bugToggle(post);
						}}
					></p>
					<p
						className='fa fa-remove'
						onClick={(event) => {
							handleDelete(post);
						}}
					></p>
				</div>
				<div
					id={`updateID${post._id}`}
					className={`updateForm ${editF ? "" : "hide"}`}
				>
					<Edit
						post={post}
						handleAssigned={handleAssigned}
                        handlesetPriority={handlesetPriority}
                        handlesetDescription={handlesetDescription}
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
						bugToggle={bugToggle}
						editF={editF}
					/>
				</div>
			</div>
		</div>
	);
}
