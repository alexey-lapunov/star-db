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

    return res.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResourse('/starships/');

    return res.results;
  }

  getStarships(id) {
    return this.getResourse(`/starships/${id}`);
  }
}       