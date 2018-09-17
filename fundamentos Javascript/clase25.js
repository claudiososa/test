class Persona {
  constructor(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
    this.altura = altura
  }
  saludar(fn){
    var {nombre,apellido} = this
    console.log(`Hola me llamo ${nombre}, ${apellido}`)
    if (fn) {
      fn(nombre,apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.80
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre,apellido,altura)
  }

  saludar(fn){
    var {nombre,apellido} = this
    // var nombre = this.nombre
    // var apellido = this.apellido
    console.log(`Hola, me llamo ${nombre}, ${apellido} y soy desarrlador/a`)
    if (fn) {
      fn(nombre,apellido,true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`);
  }
}


 var claudio = new Persona('claudio','sosa',1.9)

 var juan = new Persona('Juan','Martinez',1.7)

 var arturo = new Desarrollador('Arturo', 'Suarez',1.95)

 juan.saludar()
 claudio.saludar(responderSaludo)
 arturo.saludar(responderSaludo)
