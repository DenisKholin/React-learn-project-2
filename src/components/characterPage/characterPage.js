import { Component } from 'react';
import { Col, Row } from 'reactstrap';
import GotService from '../../services/gotService';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList/itemList';

export default class CharacterPage extends Component {
	gotService = new GotService();

	state = {
		selectedChar: 25,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}


	onCharSelected = id => {
		this.setState({
			selectedChar: id
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		return (
			<Row>
				<Col md='6'>
					<ItemList
						onCharSelected={this.onCharSelected}
						getData={this.gotService.getAllCharacters}
						renderItem={item => item.name} />
				</Col>
				<Col md='6'>
					<CharDetails charId={this.state.selectedChar} />
				</Col>
			</Row>
		)
	}
}