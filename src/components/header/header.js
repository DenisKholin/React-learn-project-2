import React from 'react';
import './header.css';

const Header = () => {
	return (
		<div className='header-block d-flex justify-content-between align-items-center'>
			<div className='header-title'>
				<a href="http://localhost:3000/">
					Game of Thrones DB
				</a>
			</div>
			<div className='header-links d-flex align-items-center'>
				<li>
					<a href="http://localhost:3000/">Characters</a>
				</li>
				<li>
					<a href="http://localhost:3000/">Houses</a>
				</li>
				<li>
					<a href="http://localhost:3000/">Books</a>
				</li>
			</div>
		</div>
	);
};

export default Header;