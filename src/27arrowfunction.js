//arrow function: anonymous function
//has no name
// only this: ()=>
//has no 'function' keyword
//most used in callback function

//IF    :single line function arrow function ()=>
// THEN : No need name, {}, 'function' & 'return' keyword.
// But store in 'function expression' variable. here eg. 'print' is 
// expression variable which is storing the function definition and 
// we can call the function using variable name 'print' and () operator.
let print = () => console.log('hello world');
print();//calling function



let pop = () => {   //arrow function with {} but no need 'function' & 'return' keyword
    console.log('hello naveen');
}
pop();




let test = function () {
    console.log('hello world');
}
test();


//arrow function with param:
//param: 1 param --> name
let printInfo = (name) => console.log(name + ' automation');
printInfo('Naveen');

//zero param:
//param: 0
let info = () => console.log('hello world');
info();

//1 param:
//param: 1 - no need to use () (if you pass single parameter then no need to use() this )
let printUser = username => console.log('hello ', username);
printUser('naveenautomation');

//param 1:  multile line fuction with single parameter
//param: element
let clickElement = element => {
    console.log('check the ', element, ' is visible');
    console.log(`Yes i see ${element}`);
    console.log('click on the ', element);
    console.log('close the browser');
};
clickElement('loginButton');




//add two numbers:
//two params: x, y
//return x+y
/**
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
let add = (x, y) => x + y;
let res = add(100, 200);
console.log(res);

let addition = (x, y) => {
    console.log('adding two numbers....');
    let z = x + y;
    return z;
}
let r1 = addition(200, 300);
console.log(r1);

let division = (x, y) => x / y;
let r2 = division(100, 2);
console.log(r2);

let findElement = id => `//div[@id='${id}']`;
let xpath = findElement('naveenopencart');
console.log(xpath);






//launch browser: ch, ff, edge
//browserName: 1 param
//return boolean
//found: true
//not found: invalid browser, false
/**
 * @param {string} browserName 
 * @returns 
 */
let launchBrowser = (browserName) => {
    console.log('trying to launch ', browserName);
    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;

        default:
            console.log('invalid browser', browserName);
            return false;
    }
};
let isBrowserLaunched = launchBrowser('chrome');
console.log(isBrowserLaunched);
if (isBrowserLaunched) {
    console.log('enter the url: ', 'https://www.nal.com');
}





let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
let t1 = sum(100, 200);
console.log(t1);
let t2 = mul(10, 20);
console.log(t2);





//give a string and convert it to lowercase...and return
let convertToLowerCase = name => name.toLowerCase();
let u1 = convertToLowerCase('NAVEEN AUTOMATION LABS')
console.log(u1);




/**
 * @param  {...string} empNames 
 */
let printEmpList = (...empNames) => {  // ... spread parameter
    console.log(empNames.length);
    console.log(empNames);
};
printEmpList('senthil', 'pooja', 'nitin', 'deepti');






//arrow function with objects:
let user = {    //Object
    name: 'tom',
    age: 30,
    salary: 12.33,
    isActive: true
};
let printUserInfo = ({ name }) => { //arrow function
    console.log(name);
};
printUserInfo(user);//call & pass object also







let user = {
    name: "Zain",
    age: 25
};
(function ({ name, age }) { //IIFE:- Immediately Invoked function expression
    console.log(name, age)
})(user);   //call & pass object from here






let result = (function ({name, rollNo}) { //IIFE:- Immediately Invoked function expression
    return name
})("Zain");
console.log(result);//here result is not function expression it is store parameter
//Not allowed



(function (name, age) { //IIFE:- Immediately Invoked function expression
    console.log(name, age)
})("Zain", 25);



let res = (function (x, y) { //IIFE:- Immediately Invoked function expression
    return x + y
})(3, 4);
console.log(res);//here res is not function expression 





//arrow function with timeout
//wait for sometime(4sec) and then callback - perform some action
setTimeout(() => {
    console.log('hello world');
}, 4000);




let res = (function (x, y) { //IIFE:- Immediately Invoked function expression
    return x + y
})(3, 4);
console.log(res);//here res is not function expression 