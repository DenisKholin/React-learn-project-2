import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';


export default class App extends Component {
	state = {
		toggle: true,
		error: false
	}



	toggleRandomChar = () => {
		this.setState({ toggle: !this.state.toggle })
	}


	render() {
		const randomChar = this.state.toggle ? <RandomChar /> : null;

		if (this.state.error) {
			return <ErrorMessage />
		}

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
					<CharacterPage />
				</Container>
			</>
		);
	}


};
