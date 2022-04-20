const topic={
    name:"Dune",
    location:"Mexico",
    position_tend:"#12",
    category:"Entretenimiento",
    getPositionName:function(){
        return this.name+"\n"+"POSICIÓN: "+this.position_tend;
    },
    getPositionCategory:function(){
        return this.name+"\n"+"CATEGORIA: "+this.category;
    }
}

console.log("NOMBRE: "+topic.getPositionName());
console.log("NOMBRE: "+topic.getPositionCategory());