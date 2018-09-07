var persona = {
    nombre:'Claudidddo',
    apellido: 'Sosa',
    edad: 39,
    sexo: 'masculino'
}

function imprimirNombreMayusculas(persona){
  var {nombre} = persona
  console.log(`Adentro de la funcion es:${nombre.toUpperCase()}`);
}

imprimirNombreMayusculas(persona)

//console.log(`Nombre fuera de la funcion:${nombre}`)
