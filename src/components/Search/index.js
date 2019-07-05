import React from 'react';

// Search
export default class Search extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.onSubmit} id="search" className="Search">
				<input type="search" placeholder="Search for a title..." />
			</form>
		);
	}
};
