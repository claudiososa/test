var edad = 27
edad +=1

var peso = 75

peso -=2

var sandwich = 1

peso +=sandwich

var jugarAlFutbol = 3

peso -=jugarAlFutbol


var precioVino = 200.3

var total = Math.round(precioVino *100 * 3) /100
var totalStr = total.toFixed(2)
var total2 = parseFloat(totalStr)

var pizza = 8
var persona = 2

var cantidadDePoricioniesXPizza = pizza / persona

console.log(`Cantidad de porsiones... ${cantidadDePoricioniesXPizza}`);

console.log(edad);
console.log(peso);

console.log(`Precio de Vino: ${precioVino}`);
console.log(`Tota de Vino: ${total}`);
console.log(`Tota de Vino: ${totalStr}`);
console.log(`Tota de Vino: ${total2}`);
