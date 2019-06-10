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

    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}`);
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

  _transformPlanet(planet) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = planet.url.match(idRegExp)[1];

    return {
        id: id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      }
  }
}       

// const server = new Server();

// server.getAllPlanets().then((res) => {
//   console.log(res)
// })