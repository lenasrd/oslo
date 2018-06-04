import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './style.css';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<h2 className="text-center">Home</h2>
				</Container>
			</div>
		);
	}
}

export default Home;
