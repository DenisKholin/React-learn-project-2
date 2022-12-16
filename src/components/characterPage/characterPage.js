import { Component } from 'react';
import GotService from '../../services/gotService';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList/itemList';
import RowBlock from '../rowBlock/rowBlock';



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

		const itemList = (
			<ItemList
				onCharSelected={this.onCharSelected}
				getData={this.gotService.getAllCharacters}
				renderItem={(item) => item.name} />
		)

		const charDetails = (
			<CharDetails charId={this.state.selectedChar} />
		)

		return (
			<RowBlock left={itemList} right={charDetails} />
		)
	}
}