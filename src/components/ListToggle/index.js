import React from 'react';
// import HeroButton from '../../components/HeroButton';

// ListToggle
export default class ListToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { toggled: false }
	}
	handleClick = (e) => {
		if(this.state.toggled === true) {
			this.setState({ toggled: false });
		} else {
			this.setState({ toggled: true });
		}
	}
	render() {
		return (
			<div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
			<div>
			<i className="fa fa-fw fa-plus"></i>
			<i className="fa fa-fw fa-check"></i>
			</div>
			</div>
		);
	}
};



// ReactDOM.render(
// 	<App />,
// 	document.getElementById('app')
// );
