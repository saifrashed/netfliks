import React from 'react';

// User Profile
export default class UserProfile extends React.Component {
	render() {
		return (
			<div className="UserProfile">
				<div className="User">
					<div className="name">Jim Dunk</div>
					<div className="image"><img src="images/me000.png" alt="" /></div>
				</div>
				<div className="UserProfile-menu">
					<div className="UserProfileSwitch">
						<ul>
							<li>
								<div className="UserProfile-image">
									<img src="http://via.placeholder.com/96x96" alt="" />
								</div>
								<div className="UserProfile-name">
									Cheyenne
								</div>
							</li>
							<li>
								<div className="UserProfile-image">
									<img src="http://via.placeholder.com/96x96" alt="" />
								</div>
								<div className="UserProfile-name">
									Denver
								</div>
							</li>
						</ul>
					</div>
					<div className="UserNavigation">
						<ul>
							<li>Your Account</li>
							<li>Help Center</li>
							<li>Sign out of Netfliks</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
};
