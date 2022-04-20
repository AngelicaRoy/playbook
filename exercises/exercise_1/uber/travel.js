const travel={
    punto_partida:{
        estado:"Michoacan",
        ciudad:"Morelia",
        calle:"av. revoluccion",
        orienta:"norte",
        num_ext:"104",
        num_in:"s/n"
    },
    destino:{
        calle:"aldama",
        orienta:"norte",
        num_ext:"34",
        num_in:"s/n"
    },
    iniciar_viaje:{
        fecha:"12 de abril del 2022",
        hora:"13:15:23"
    },
    getViaje:function(){
        return this.iniciar_viaje.fecha+"\n"+this.iniciar_viaje.hora;
    },
    getDestino:function(){
        return this.destino.calle+" "+this.destino.orienta+" "+this.destino.num_ext+" "+this.destino.num_in;
    },
    getPartida:function(){
        return this.punto_partida.calle+" "+this.punto_partida.orienta+" "+this.punto_partida.num_ext+" "+this.punto_partida.num_in;
    }   
}
console.log("FECHA VIAJE:\n"+travel.getViaje());
console.log("DESTINO:\n"+travel.getDestino());
console.log("PARTIDA:\n"+travel.getPartida());