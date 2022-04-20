//Diagrama de Objeto: Usuario
const usuario={
    name:"Ariadna_ER",
    foto_perfil:"foto.jpg",
    foto_portada:"foto_2.jpg",
    sexo:"Mujer",
    fecha_nac:"22 de septiembre 1996",
    getNameandFoto:function(){
        return this.name+"\n"+this.foto_perfil;
    },
    getGeneralInfo:function(){
        return this.name+"\n"+this.sexo+"\n"+this.foto_perfil+"\n"+this.foto_portada;
    }
}
console.log("NOMBRE Y FOTO:\n"+usuario.getNameandFoto());
console.log("INFORMACIÓN GENERAL:\n"+usuario.getGeneralInfo());
