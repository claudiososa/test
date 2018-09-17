var claudio = {
  nombre: 'Claudio',
  apellido: 'Sosa',
  altura: 1.72,
  cantidadDeLibros: 90
}

var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 100
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 120
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 130
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 70
}

const esAlta = ({altura}) => altura > 1.8

const esBaja = ({altura}) => !esAlta({altura})


var personas = [
  claudio,juan,martin,vicky,paula
]

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => ({
  ... persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

console.log(`En total todos tienen ${totalDeLibros} Libros`);


console.log(personasAltas);
console.log(personasBajas);
console.log(personasCms);
