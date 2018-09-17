var claudio = {
  nombre: 'claudio',
  apellido: 'sosa',
  edad: 17,
  ingeniero: false,
  programador: true,
  dj: true,
  guitarrista: false,
  docente: false
}

function imprimirProfesion(persona){
  console.log(`${persona.nombre} es:`)
  if (persona.programador) {
    console.log('programador');
  } else {
    console.log('no es programador');
  }

  if (persona.ingeniero) {
    console.log(`ingeniero`)
  }else {
    console.log('no es ingeniero');
  }

  if (persona.dj) {
    console.log(`dj`)
  }else {
    console.log('no es DJ');
  }

  if (persona.guitarrista) {
    console.log(`guitarrista`)
  } else {
    console.log('no es guitarrista');
  }

  if (persona.docente) {
    console.log(`docente`)
  }else {
    console.log('no es docente');
  }
}

function imprimirSiEsMayorDeEdad(persona){
  if (persona.edad > 17) {
    console.log(`${persona.nombre} es Mayor de edad`);
  } else {
    console.log(`${persona.nombre} es Menor de edad`);
  }
}

imprimirProfesion(claudio)
imprimirSiEsMayorDeEdad(claudio)
