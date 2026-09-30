//data types: type of data
//1. Primitive Data type: memory is fixed - pre defined data types
//number, string, boolean: true/false ,BigInt, undefined, null

//2. Non Primitve Data type: Reference Type memory is not fixed(dynamic):
//Array, objects, functions, map/list/set

//3 indentifiers: var, let, const
//1. number:
//size: 8 bytes = 8x8 = 64 bits
let x = 10;
console.log(x);
console.log(typeof x);

let y = 12.33;
console.log(y);
console.log(typeof y);

let i = -100;
console.log(i);
console.log(typeof i);

//2. string/characters: 
// "" and ''
//size: for each char 2 bytes
let name = 'Naveen'; //6x2 = 12 bytes
console.log(name);
console.log(typeof name);

let mesg = 'welcome to NAL';
console.log(mesg);
console.log(typeof mesg);

let m1 = '$';//2 bytes
console.log(m1);
console.log(typeof m1);

let m2 = '10000';
console.log(typeof m2);

let m3 = 10000;
console.log(typeof m3);

let test = "i love javascript coding";
console.log(test);
console.log(typeof test);

let p;
console.log(p); //undefined
console.log(typeof p);//undefined

//3. boolean: true/false
//4 bytes
let flag = true;
console.log(flag);
console.log(typeof flag);

let isElementExist = false;
console.log(isElementExist);
console.log(typeof isElementExist);

//4. undefined: 
//size: 0 bytes
let firstName = undefined;//0
console.log(firstName);
console.log(typeof firstName);

let firstName = 'Pooja';//10 bytes
console.log(firstName);
console.log(typeof firstName);

//null: no values
//size: 0 bytes

let obj = null;
console.log(obj);
console.log(typeof obj);//object //existing bug in JS..legacy bug

//Re-initialization:
let c = 10;
// let c = 20; //not allowed redeclaration means let use one time at start
c = 30; //allowed reassignment
console.log(c);
c = 100;
c = 'naveen';
console.log(c);

//var -- old js way of declaring the variables
var i = 10;
var i = 20;
console.log(i);

var lastName = 'sharma';
var toolName = 'Playwright';
var toolName = 'Selenium';
console.log(toolName);

//const... fixed value:
const pi = 3.14;
console.log(pi);
console.log(typeof pi);
// pi = 5.56;      //Not allowed reassignment, we already assigned the value to pi
// console.log(pi);

const trainerName = 'Naveen';
// trainerName = 'Asha';   //Not allowed reassignment, we already assigned the value to trainerName
// console.log(trainerName);

const title = 'LoginPage';
console.log(title);

//const: 
// redeclaration: No
// reassignment: No

//let:
// redeclaration: No
// reassignment: Yes

//var: not a good practice
// redeclaration: Yes
// reassignment: Yes


//Hoisting: 
//console.log(m);
let m;
console.log(m);
m = 10;
console.log(m);//10

//var: allowed -- undefined -- no error
//let: not allowed
//const: not allowed
//==============================================================

//var
var a = 10
console.log(a);
console.log(typeof (a));
var a = 20
console.log(a);
console.log(typeof (a));


//let 
let b = 30;
console.log(b);
console.log(typeof (b));
b = 40;
console.log(b);
console.log(typeof (b));

//const
const c = 50;
console.log(c);
console.log(typeof (c));
//const c=60;   //not allowed redeclaration using const
//c=50; //not allowed
// console.log(c);
// console.log(typeof(c));
console.log("****************")

let d;
console.log(d);

let e = null;
console.log(e);

let f = undefined;
console.log(f);

let g = true
console.log(g);

let h = 'niranjan'
console.log(h);

console.log("-------------");
console.log(5 + "5");
console.log(5 + +"5");//second + is called the 'unary plus' operator String "5" is converted to number 5