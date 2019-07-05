import React from 'react'

// Hero Button

// export default class HeroButton extends React.Component {
//
//   render() {
//     return (
//       <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
//     );
//   }
// };

const HeroButton = ({primary,text}) => (
  <a className="Button" href={'https://www.netflix.com/watch/80025313?trackId=200257859'} data-primary={primary}>{text}</a>
);

export default HeroButton;
