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

	_transformCharacter(char) {
		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			death: char.death,
			culture: char.culture
		}
	}
}