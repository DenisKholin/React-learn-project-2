import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import CharDetails from '../charDetails/charDetails';
import ItemList from '../itemList/itemList';
import RandomChar from '../randomChar/randomChar';


export default class App extends Component {
	state = {
		toggle: true
	}

	toggleRandomChar = () => {
		this.setState({ toggle: !this.state.toggle })
	}

	render() {
		const randomChar = this.state.toggle ? <RandomChar /> : null;

		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>
							{randomChar}
							<button onClick={this.toggleRandomChar}>Toggle</button>
						</Col>
					</Row>
					<Row>
						<Col md='6'>
							<ItemList />
						</Col>
						<Col md='6'>
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}


};
