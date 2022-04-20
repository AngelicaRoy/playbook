//Diagrama de Objeto: Biografía
const biografia={
    user_name:"Angelica Roy",
    num_friends:120,
    detalles:{
        fecha_union:"Junio de 2012",
        num_seguidores:34
    },
    post:[
        "post_1",
        "post_2",
        "post_3"
    ],
    amigos:[
        {
            name:"Anita RS",
            common_friends:20
        },
        {
            name:"Jose Reyes E.",
            common_friends:12            
        }
    ],
    getFriends:function(){
        return "Fecha union: "+this.detalles.fecha_union+"\nNumero de seguidores: "+this.detalles.num_seguidores;
    }
}

console.log("NOMBRE "+biografia.user_name);
console.log("Detalles "+biografia.getFriends());