const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

// const onPeopleResponse =



function  obtenerPersonaje(id){
  return new Promise((resolve,reject) => {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $
    .get(URL, OPTS, function (data){
      resolve(data)
    })
    .fail(() => reject(id))

  })
}

function onError(id){
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then(function (personaje){
    console.log(`Hola yo soy el personaje ${personaje.name}`)
  })
  .catch(onError)


// for (var i = 1; i < 10; i++) {
//   obtenerPersonaje(i, function(){
//     obtenerPersonaje(i+1)
//   })
// }

//obtenerPersonaje(2)
//obtenerPersonaje(3)
