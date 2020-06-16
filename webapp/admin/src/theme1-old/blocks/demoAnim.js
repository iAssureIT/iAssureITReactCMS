import React from 'react';
import './demoAnim.css';
export default class demoAnim extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div >
				<div className="earth-demo">
				 <div className="earth">
				    <div className="more-info">
				      <h1>Earth</h1>
				      
				    </div>
				    <img src="https://cssanimation.rocks/images/random/earth.png"/>
				  </div>
				  <div className="moon-container">
				    <div className="moon">
				      <img src="https://cssanimation.rocks/images/random/moon.png"/>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
