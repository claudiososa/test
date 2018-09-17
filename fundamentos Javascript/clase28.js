const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const LUKEURL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`

const OPTS = {crossDomain:true}

const onPeopleResponse = function (persona) {
  console.log(`Hola yo soy, ${persona.name}`);
}
$.get(LUKEURL, OPTS, onPeopleResponse)
