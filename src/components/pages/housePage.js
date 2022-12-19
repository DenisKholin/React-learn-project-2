import { Component } from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList/itemList';
import RowBlock from '../rowBlock/rowBlock';


export default class HousePage extends Component {
	gotService = new GotService();

	state = {
		selectedHouse: null,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	onItemSelected = id => {
		this.setState({
			selectedHouse: id
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}



		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllHouses}
				renderItem={(item) => item.name} />
		)

		const bookDetails = (
			<ItemDetails
				itemId={this.state.selectedHouse}
				getData={this.gotService.getHouse}>
				<Field field="name" label="Name" />
				<Field field="region" label="Region" />
				<Field field="words" label="Words" />
				<Field field="overlord" label="Overlord" />
			</ItemDetails>
		)

		return (
			<RowBlock left={itemList} right={bookDetails} />
		)
	}
}