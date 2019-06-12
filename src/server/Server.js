export default class Server {
  async getResourse(url) {
    const body = await fetch(`https://swapi.co/api${url}`);

    if (!body.ok) {
      throw new Error(`Status: ${body.status}`)
    } 

    const res = await body.json();

    return res;
  }

  async getAllPersons() {
    const res = await this.getResourse('/people');

    return res.results.map( (item) => { return this._transformPerson(item)} );
  }

  async getPerson(id) {
    const res = await this.getResourse(`/people/${id}`);
    return this._transformPerson(res);
  }

  async getAllPlanets() {
    const res = await this.getResourse('/planets/');

    return res.results.map( (item) => { return this._transformPlanet(item) });
  }

  async getPlanet(id) {
    const res = await this.getResourse(`/planets/${id}`);

    return this._transformPlanet(res);
  }

  async getAllStarships() {
    const res = await this.getResourse('/starships/');

    return res.results;
  }

  getStarships(id) {
    return this.getResourse(`/starships/${id}`);
  }

  _regExp(obj) {
    const idRegExp = /\/([0-9]*)\/$/;
    return obj.url.match(idRegExp)[1];
  }

  _transformPerson(person) {
    return{
        id: this._regExp(person),
        name: person.name,
        skinColor: person.skin_color,
        birthYear: person.birth_year,
        gender: person.gender,
      }
  }

  _transformPlanet(planet) {
    return {
        id: this._regExp(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      }
  }
}       
// const server = new Server();

// server.getPerson(2).then((res) => {
//   console.log(res)
// })