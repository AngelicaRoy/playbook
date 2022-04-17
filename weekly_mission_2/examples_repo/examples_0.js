console.log("Objetos")

// Ejemplo 1: Crear un objeto
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)
//{}[[Prototype]]: Object

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
  name: "Angelica",
  age: 25
}
/*
{name: 'Carlo', age: 27}
age: 27
name: "Carlo"
[[Prototype]]: Object
*/
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObjetc2)
//------------------------------------------
// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Puchis",
    age: 12,
    nicknames: [
     "Pucho",
     "Puchulini"
    ],
    address: {
      zip_code: "61518",
      street: "Benito Juarez 78",
      city: "Zitacuaro"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

//------------------------------------------
// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Pucho",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
}
  
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()//Pucho te saluda en español!
  
// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
}
  
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Pucho")
//Woopa say's hello to Pucho
