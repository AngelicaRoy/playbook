/*
Crea la clase.
Crea un constructor que permita recibir un nombre.
Crea la función sayHello().
Crea la función sayMessage().
Exporta la clase para que pueda ser importada en el archivo main.js.
*/
export default class Pokemon{
  constructor(name){
    this.name=name;
  }

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda!!!`)
  }
  sayMessage(message){
    console.log(`Mi pokemon ${this.name} dice: ${message}`)
  }
}