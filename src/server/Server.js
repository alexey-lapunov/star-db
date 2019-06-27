
export default class Server {
  async getResourse(url) {
    const body = await fetch(`https://swapi.co/api${url}`);

    if (!body.ok) {
      throw new Error(`Status: ${body.status}`)
    } 

    const res = await body.json();

    return res;
  }

  getAllPersons = async () => {
    const res = await this.getResourse('/people');

    return res.results.map( (item) => { return this._transformPerson(item)} );
  }

  getPerson = async (id) => {
    const res = await this.getResourse(`/people/${id}`);
    return this._transformPerson(res);
  }

  getAllPlanets = async () => {
    const res = await this.getResourse('/planets/');  

    return res.results.map( (item) => { return this._transformPlanet(item) });
  }

  getPlanet = async (id) => {
    const res = await this.getResourse(`/planets/${id}`);

    return this._transformPlanet(res);
  }

  getAllStarships = async () => {
    const res = await this.getResourse('/starships/');

    return res.results.map( (item) => this._transformStarships(item) );
  }

   getStarships = async (id) => {
    const res = await this.getResourse(`/starships/${id}`);

    return this._transformStarships(res)
  }

  _regExp(obj) {
    const idRegExp = /\/([0-9]*)\/$/;
    return obj.url.match(idRegExp)[1];
  }

  _transformStarships(starships) {
    const id = this._regExp(starships);

    return {
      id: this._regExp(starships),
      name: starships.name,
      class: starships.starship_class,
      speed: starships.max_atmosphering_speed,
      model: starships.model,
      img: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
    }
  }

  _transformPerson(person) {
    const id = this._regExp(person);

    return{
        id: id,
        name: person.name,
        skinColor: person.skin_color,
        birthYear: person.birth_year,
        gender: person.gender,
        img: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      }
  }

  _transformPlanet(planet) {
    const id = this._regExp(planet);

    return {
        id: this._regExp(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
      }
  }
}       