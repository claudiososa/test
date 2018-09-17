function  Persona(nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = 20
  this.altura = altura

}

Persona.prototype.saludar = function (){
  console.log(`Hola me llamo ${this.nombre}, ${this.apellido}`);
}

Persona.prototype.soyAlto = function (){
  this.altura > 1.80 ? console.log(`Yo soy alto mido ${this.altura}`) :
  console.log(`Yo soy bajo mido ${this.altura}`)
  // if (this.altura > 1.80) {
  //
  // }else {
  //
  // }

}

var claudio = new Persona('claudio','sosa',1.9)

var juan = new Persona('Juan','Martinez',1.7)

var arturo = new Persona('Arturo', 'Suarez',1.95)

// juan.saludar()
// claudio.saludar()
