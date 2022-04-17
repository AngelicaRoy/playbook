/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
let cad="*";
for (let i = 0; i <8; i++) {
    console.log(cad);
    cad=cad+"*";
    if(i==8){
        break;
    }
}
