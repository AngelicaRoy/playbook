//Diagrama de Objeto: Usuario
const usuario={
    name:"Aria_ER",
    foto_perfil:"foto.jpg",
    foto_portada:"foto_2.jpg",
    Biografia:"Soy...",
    ubicacion:"Mexico D.F.",
    sitio_web:"www.aeroy.mx",
    fecha_nac:"22 de septiembre 1996",
    getNameandFoto:function(){
        return this.name+"\n"+this.foto_perfil;
    },
    getGeneralInfo:function(){
        return this.name+"\n"+this.Biografia+"\n"+this.foto_perfil+"\n"+this.foto_portada;
    }
}
console.log("NOMBRE Y FOTO:\n"+usuario.getNameandFoto());
console.log("INFORMACIÓN GENERAL:\n"+usuario.getGeneralInfo());
