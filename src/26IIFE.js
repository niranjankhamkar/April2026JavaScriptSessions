//IIFE: Immediately Invoked function expression
//anonymous function: no name of the function
//this function will be invoked(called) by itself

(function () {
    console.log('hello world');
})();

(function (username) {
    console.log('hello ', username);
})('Naveen');

(function (name, age) {
    console.log(name, age);
})('naveen', 10);




let result = (function (x, y) {     //here result is not function expression 
// it is only value which is returned by the function
// eg 'true or false' or 'number' or 'string' etc 
    console.log('here result is not "function expression" <-- remember');
    return x + y;
})(100, 200);
console.log(result);//300



let flag = (()=>{
    console.log('hello world');
    console.log('bye');
    return true;
})();
console.log(flag);//true

//Type of function :-
//simple function
//function expression
//anoynymous function
//IIFE
//arrow functions
//callback functions
//aysnc await functions

(()=>{
console.log('practise by niranjan');
})();