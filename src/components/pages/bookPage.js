import { Component } from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList/itemList';
import RowBlock from '../rowBlock/rowBlock';


export default class BookPage extends Component {
	gotService = new GotService();

	state = {
		selectedBook: 1,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	onItemSelected = id => {
		this.setState({
			selectedBook: id
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}



		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllBooks}
				renderItem={(item) => item.name} />
		)

		const bookDetails = (
			<ItemDetails
				itemId={this.state.selectedBook}
				getData={this.gotService.getBook}>
				<Field field="name" label="Name" />
				<Field field="publisher" label="Publisher" />
				<Field field="released" label="Released" />
			</ItemDetails>
		)

		return (
			<RowBlock left={itemList} right={bookDetails} />
		)
	}
}