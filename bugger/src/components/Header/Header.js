import React from "react";
import AddBug from '/Users/hacker/capfront/bugger/src/components/AddBugs/AddBug.js';
import "./Header.css";


const Header = ({
	handleAssigned,
	handlesetPriority,
	handlesetDescription,
	handleNew,
	bugToggleNew,
	toggleNew,
}) => {
	return (
		<div>
			<header className='mb-auto'>
				<div>
					<h2 className='nav nav-masthead justify-content-center float-md'>
								BUGGER
					</h2>
					<nav className='nav nav-masthead justify-content-center float-md'>
						<a
							className='nav-link fw-bold py-1 px-0 nav'
							aria-current='page'
							href='/'
						>
							HOME
						</a>


						<a className='nav-link fw-bold py-1 px-0' href='/search.html'>
							SEARCH
						</a>

						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/eduardopaaaa/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>GITHUB</p>
						</a>
						
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/jesus-eduardo-prado/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>EDUARDO PRADO</p>
						</a>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Header;
