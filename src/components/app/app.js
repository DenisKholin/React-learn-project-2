import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import CharDetails from '../charDetails/charDetails';
import ItemList from '../itemList/itemList';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage';


export default class App extends Component {
	state = {
		toggle: true,
		selectedChar: 25,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	toggleRandomChar = () => {
		this.setState({ toggle: !this.state.toggle })
	}

	onCharSelected = id => {
		this.setState({
			selectedChar: id
		})
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
					<Row>
						<Col md='6'>
							<ItemList onCharSelected={this.onCharSelected} />
						</Col>
						<Col md='6'>
							<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row>
				</Container>
			</>
		);
	}


};
