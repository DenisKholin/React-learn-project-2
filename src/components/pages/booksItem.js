import { Component } from "react";
import GotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails/itemDetails";


export default class BooksItem extends Component {
	gotService = new GotService();



	render() {
		console.log(this.props.bookId)
		return (
			<ItemDetails
				// itemId={this.props.bookId}
				getData={this.gotService.getBook}>
				<Field field="name" label="Name" />
				<Field field="publisher" label="Publisher" />
				<Field field="released" label="Released" />
			</ItemDetails>
		)
	}
}