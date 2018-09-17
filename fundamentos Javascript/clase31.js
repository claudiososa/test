const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

// const onPeopleResponse =



function  obtenerPersonaje(id, callback){
  const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $
    .get(URL, OPTS, callback)
    .fail(() => {
      console.log(`Sucedio un error. No  se pudo obtener el personaje ${id}`);
    })
}

obtenerPersonaje(1, function(personaje){
  console.log(`Hola yo soy, ${personaje.name}`)

  obtenerPersonaje(2, function(personaje){
    console.log(`Hola yo soy, ${personaje.name}`)

    obtenerPersonaje(3, function(personaje){
        console.log(`Hola yo soy, ${personaje.name}`)

        obtenerPersonaje(4, function(personaje){
          console.log(`Hola yo soy, ${personaje.name}`)

          obtenerPersonaje(5, function(personaje){
            console.log(`Hola yo soy, ${personaje.name}`)

          obtenerPersonaje(6, function(personaje){
            console.log(`Hola yo soy, ${personaje.name}`)

          })
        })
      })
    })
  })
})
// for (var i = 1; i < 10; i++) {
//   obtenerPersonaje(i, function(){
//     obtenerPersonaje(i+1)
//   })
// }

//obtenerPersonaje(2)
//obtenerPersonaje(3)
