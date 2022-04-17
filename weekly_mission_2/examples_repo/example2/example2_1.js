console.log("POO");

//objeto de js
const woopa_obj={
    name:"Woopa",
    mission:"Node JS",
    age:"12",
    color:"pink"
}

//crear clase
class Ajolonauta{
    constructor(name, mission, age, color){
        this.name=name;
        this.mission=mission;
        this.age=age;
        this.color=color;
    }

    //metodo de una clase
    sayHello(){//usar una propiedad del objeto
        return `${this.name} is saying Hello!!`
    }
}

const woopa1=new Ajolonauta("Woopa1", "Node JS", 18, "Pink");
console.log(woopa1)
//ejecutar un metodo
console.log(woopa1.sayHello());//objet.method_name

/*
Ajolonauta {
  name: 'Woopa1',
  mission: 'Node JS',
  age: 18,
  color: 'Pink'
}
*/
const wooper1=new Ajolonauta("Wooper", "Java", 10, "Blue");
console.log(wooper1);
/*Ajolonauta { name: 'Wooper', mission: 'Java', age: 10, 
color: 'Blue' }*/


console.log(Ajolonauta)//[class Ajolonauta]
//instanciación de objetos a partir de una clase
const woopa=new Ajolonauta();//creacion de un (instancia) objeto apartir de una clase
const wooper=new Ajolonauta();//creacion de un (instancia) objeto apartir de una clase
const woopy=new Ajolonauta();//creacion de un (instancia) objeto apartir de una clase

//objetos
console.log(woopa);//Ajolonauta {}
console.log(wooper);//Ajolonauta {}
console.log(woopy);//Ajolonauta {}

const woopa_obj_js={}
console.log(woopa_obj_js);

//como ver un atributo en particular de un objeto
console.log(wooper1.name)//Wooper


