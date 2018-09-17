const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

const onPeopleResponse = function (persona) {
  console.log(`Hola yo soy, ${persona.name}`);
}

function  obtenerPersonaje(id, callback){
  const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $.get(URL, OPTS, onPeopleResponse)
}

for (var i = 0; i < 30; i++) {
  obtenerPersonaje(i)
}

//obtenerPersonaje(2)
//obtenerPersonaje(3)
