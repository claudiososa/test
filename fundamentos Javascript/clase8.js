var persona = {
    nombre:'Claudidddo',
    apellido: 'Sosa',
    edad: 39,
    sexo: 'masculino'
}

var claudio = {
    nombre:'Claudidddo',
    apellido: 'Sosa',
    edad: 39,
    sexo: 'masculino'
}

function imprimirNombreMayusculas(persona){
  var {nombre} = persona
  console.log(`Adentro de la funcion es:${nombre.toUpperCase()}`);
}

function imprimirNombreyEdad({nombre, edad}){
  console.log(`Hola me llamo ${nombre} y tengo ${edad} anios`)
}

imprimirNombreMayusculas(persona)
imprimirNombreyEdad(claudio)
//console.log(`Nombre fuera de la funcion:${nombre}`)

function cumpleanios(persona){
  return {
    ...persona,
    edad:persona.edad +1
  }
  //persona.edad +=1
}
