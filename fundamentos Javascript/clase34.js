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

 async function obtenerPersonajes(){
  var ids = [1,2,3,4,5,6,7]
  var promesas = ids.map(id => obtenerPersonaje(id))

  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  } 
}

obtenerPersonajes()

//
// obtenerPersonaje(1)
//   .then(personaje => {
//     console.log(`Hola yo soy el personaje 1  ${personaje.name}`)
//     return obtenerPersonaje(2)
//   })
//   .then(personaje => {
//     console.log(`Hola yo soy el personaje 2 ${personaje.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(personaje => {
//     console.log(`Hola yo soy el personaje 3 ${personaje.name}`)
//     return obtenerPersonaje(4)
//   })
//   .then(personaje => {
//     console.log(`Hola yo soy el personaje 4 ${personaje.name}`)
//     return obtenerPersonaje(5)
//   })
//   .then(personaje => {
//     console.log(`Hola yo soy el personaje 5 ${personaje.name}`)
//     return obtenerPersonaje(6)
//   })
//   .then(personaje => {
//     console.log(`Hola yo soy el personaje 6 ${personaje.name}`)
// //    return obtenerPersonaje(7)
//   })
//   .catch(onError)
