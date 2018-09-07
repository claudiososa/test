var persona = {
    nombre:'Claudio',
    apellido: 'Sosa',
    edad: 39,
    sexo: 'masculino'
}

function imprimirNombreMayusculas({nombre}){
  console.log(`Adentro de la funcion es:${nombre.toUpperCase()}`);
}

imprimirNombreMayusculas(persona)

//console.log(`Nombre fuera de la funcion:${nombre}`)
