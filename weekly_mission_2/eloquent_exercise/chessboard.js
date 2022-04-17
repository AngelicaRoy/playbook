cad="";
izquierda=" # # # # ";
derecha="# # # #";
for (let i =0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        cad+=izquierda+"\n";
        cad+=derecha +"\n";        
    }    
}
console.log(cad);