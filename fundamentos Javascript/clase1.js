var nombre = 'Claudio',apellido = 'Sosa'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primeraLetraNombre = nombre.charAt(0 )
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1,4)

console.log(nombreEnMayusculas);
console.log(apellidoEnMinusculas);
console.log(primeraLetraNombre);
console.log(cantidadDeLetrasDelNombre);
console.log(nombreCompleto);
console.log(str);
console.log(`La ultima Palabra de su nombre es: ${nombre.charAt(nombre.length-1)}`);

//
// var edad = '28 anos'
//
// console.log('Hola: '+nombre+' '+apellido)
// console.log('Tengo '+ edad);
//
// var pesos = 75
