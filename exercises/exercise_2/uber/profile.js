//Diagrama de Objeto: Perfil
const perfil={
    name:"Daniela",
    apellido:"Reyes",
    telefono:"4453459011",
    ubicacion:{
        estado:"Michoacan",
        ciudad:"Morelia",
        calle:"av. revoluccion",
        orienta:"norte",
        num_ext:"104",
        num_in:"s/n"
    },
    idioma:"español",
    correo_elec:"daniRe34@xxxxx.com",
    getUbicacionEstado:function(){
        return this.ubicacion.estado+" CIUDAD: "+this.ubicacion.ciudad;
    },
    getDomicilio:function(){
        return this.ubicacion.calle+" "+this.ubicacion.orienta+" "+this.ubicacion.num_ext+" "+this.ubicacion.num_in;
    }
}
console.log("ESTADO: "+perfil.getUbicacionEstado());
console.log("DOMICILIO: "+perfil.getDomicilio());
