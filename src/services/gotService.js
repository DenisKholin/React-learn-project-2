export default class GotService {
	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api';
	}

	async getResourse(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	}

	async getAllCharacters() {
		const res = await this.getResourse('/characters?page=5&pageSize=10');
		return res.map(this._transformCharacter)
	}

	async getCharacter(id) {
		const character = await this.getResourse(`/characters/${id}`);
		return this._transformCharacter(character);
	}

	fillEmptyData = data => {
		for (let key in data) {
			if (!data[key] || data[key] === '' || data[key] === undefined || data[key] === null || data[key] === 0) {
				data[key] = 'no info :(';
			}
		}
	}

	_transformCharacter(char) {
		this.fillEmptyData(char);

		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			death: char.died,
			culture: char.culture
		}
	}


}