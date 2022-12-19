import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/characterPage';
import ItemList from '../itemList/itemList';
import CharDetails from '../itemDetails/itemDetails';
import GotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookPage from '../pages/bookPage';


export default class App extends Component {
	gotService = new GotService();

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
			<Router>
				<div className='app'>
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
						<BookPage />
						<Row>
							<Col md='6'>
								<ItemList
									onItemSelected={this.onItemSelected}
									getData={this.gotService.getAllHouses}
									renderItem={(item) => item.name} />
							</Col>
							<Col md='6'>
								<CharDetails charId={this.state.selectedChar} />
							</Col>
						</Row>
					</Container>
				</div>

			</Router>
		);
	}


};
