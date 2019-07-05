import React from 'react';
import Logo from '../../components/Logo'
////////////
// Header //
////////////
export default class Header extends React.Component {
	render() {
		return (
			<header className="Header">
				<Logo />
				<Navigation />
				<Search onSubmit={this.props.onSubmit} />
				<UserProfile />
			</header>
		);
	}
};
