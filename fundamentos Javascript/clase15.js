var contador = 0

const llueve = () => Math.random() < 0.25


do {
  contador++
} while (!llueve())

var veces = 'veces'

if (contador === 1) {
  veces = 'vez'
}

console.log(`Fui a ver si llovia ${contador} ${veces}`);
