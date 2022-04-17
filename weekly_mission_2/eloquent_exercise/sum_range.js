/*
The introduction of this book alluded to the following as a nice way to compute the sum of a 
range of numbers:

console.log(sum(range(1, 10)));

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that 
indicates the “step” value used when building the array. If no step is given, the elements go up 
by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with 
negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function rango1(inicio, fin, step){
    const array=[];
    for (let index = inicio; index <= fin; index++) {
        array.push(index);                
    }
    if(step!=null && inicio==1){
        for (let index = inicio; index <= fin; index=index+step) {
            array.push(index);
        }
        return array;
    }else{
        for (let index = inicio; index >= fin; index=index+step) {
            array.push(index);
        }
        return array;
    }
}

function suma(arreglo){
    let acumulador=0;
    for (let index = 0; index < arreglo.length; index++) {
        acumulador= acumulador+arreglo[index];
    }
    return acumulador;
}

let arreglo=[1,2,3];
console.log(rango1(1, 10,undefined));
console.log(rango1(5,2,-1));
console.log(suma(rango(1, 10)));
