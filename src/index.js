//https://swapi.co/api/people/1

class SwapiService {
  async getResource(url) {
    const res = await fetch(url);
    return await res.json();
  }

  getAllPeople() {
    return this.getResource('https://swapi.co/api/people/');
  }

  getPerson(id) {
    return this.getResource(`https://swapi.co/api/people/${id}`)
  }
}

const swapi = new SwapiService();
swapi.getPerson(3).then((body) => {
  console.log(body)
});