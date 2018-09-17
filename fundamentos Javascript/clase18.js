var claudio = {
  nombre: 'Claudio',
  apellido: 'Sosa',
  altura: 1.72
}

var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8

const esBaja = ({altura}) => !esAlta({altura})

var personas = [
  claudio,juan,martin,vicky,paula
]

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

console.log(personasAltas);
console.log(personasBajas);
