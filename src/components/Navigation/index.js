import React from 'react';

// Navigation
export default class Navigation extends React.Component {
	render() {
		return (
			<div id="navigation" className="Navigation">
				<nav>
					<ul>
						<li>Browse</li>
						<li>My list</li>
						<li>Top picks</li>
						<li>Recent</li>
					</ul>
				</nav>
			</div>
		);
	}
};
