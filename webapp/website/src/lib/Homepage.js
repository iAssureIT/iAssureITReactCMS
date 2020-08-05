import React from 'react';

export default class Homepage extends React.Component {


	constructor(props) {
		super(props);
	}
	componentDidMount(){
		this.props.history.push("/home-page");
		
	}

	render() {
		return (
			<div></div>
		);
	}
}
