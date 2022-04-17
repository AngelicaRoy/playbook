// Your code here.
function arrayToList(arreglo){
    return {...arreglo};
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/*
Object to Array
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
*/ 