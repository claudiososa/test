var nombre = 'claudio'

function imprimirNombreMayusculas(nombre){
  nombre = nombre.toUpperCase()
  console.log(`Adentro de la funcion es:${nombre}`);
}

imprimirNombreMayusculas(nombre)

console.log(`Nombre fuera de la funcion:${nombre}`)
