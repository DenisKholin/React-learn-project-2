export default class GotService {
	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api';
	}

	getResourse = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return await res.json();
	}

	getAllCharacters = async () => {
		const res = await this.getResourse('/characters?page=5&pageSize=10');
		return res.map(item => this._transformCharacter(item))
	}

	getCharacter = async (id) => {
		const character = await this.getResourse(`/characters/${id}`);
		return this._transformCharacter(character);
	}

	getAllBooks = async () => {
		const res = await this.getResourse('/books/');
		return res.map(item => this._transformBook(item))
	}

	getBook = async (id) => {
		const book = await this.getResourse(`/books/${id}`);
		return this._transformBook(book);
	}

	getAllHouses = async () => {
		const res = await this.getResourse('/houses/');
		return res.map(item => this._transformHouse(item))
	}

	getHouse = async (id) => {
		const house = await this.getResourse(`/books/${id}`);
		return this._transformHouse(house);
	}

	isSet = (data) => {
		if (data) {
			return data
		} else {
			return 'no info :('
		}
	}

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)$/;
		return item.url.match(idRegExp)[1];
	}

	_transformCharacter(char) {
		return {
			id: this._extractId(char),
			name: this.isSet(char.name),
			gender: this.isSet(char.gender),
			born: this.isSet(char.born),
			death: this.isSet(char.died),
			culture: this.isSet(char.culture)
		}
	}

	_transformBook(book) {
		return {
			id: this._extractId(book),
			name: this.isSet(book.name),
			publisher: this.isSet(book.publisher),
			released: this.isSet(book.released)
		}
	}

	_transformHouse(house) {
		return {
			id: this._extractId(house),
			name: this.isSet(house.name),
			region: this.isSet(house.region),
			words: this.isSet(house.words),
			titles: this.isSet(house.titles),
			overlord: this.isSet(house.overlord),
			ancestralWeapons: this.isSet(house.ancestralWeapons),
		}
	}

}