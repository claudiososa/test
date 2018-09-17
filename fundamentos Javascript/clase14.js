var claudio = {
  nombre:'Claudio',
  apellido:'Sosa',
  edad: 28,
  peso: 75

}

console.log(`Al inicio del anio ${claudio.nombre} pesa ${claudio.peso} kg.`);

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = ()=> Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = claudio.peso - 3

var dias = 0

while (claudio.peso > META) {
  //debugger
  if (comeMucho()) {
    //aumentar de peso
    aumentarDePeso(claudio)
  }
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(claudio)
  }
  dias +=1
}


console.log(`Pasaron ${dias} dias hasta que ${claudio.nombre} adelgazo 3 Kg`);
