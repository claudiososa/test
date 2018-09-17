var claudio = {
  nombre:'Claudio',
  apellido:'Sosa',
  edad: 28,
  peso: 75

}

console.log(`Al inicio del anio ${claudio.nombre} pesa ${claudio.peso} kg.`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(claudio)
  } else if (random < 0.5) {
    //adelgazar
    adelgazar(claudio)
  }
}


console.log(`Al final del anio ${claudio.nombre} pesa ${claudio.peso.toFixed(1)} kg.`);
