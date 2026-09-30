let add = (a,b)=> a+b;

function clacy(callback, a, b){
    console.log('calcution doing.....');
    return callback(a,b);
}

let result = clacy(add,4,6);
console.log(result);
