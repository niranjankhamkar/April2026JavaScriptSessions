//++ and --

//1. post(later) increment:
//first assign and increase
let a = 1;
let b = a++;

console.log(a);//2
console.log(b);//1

let x = -99;
let y = x++;

console.log(x);
console.log(y);

let num = 10;
console.log(num++);//10

console.log(num);

//2. pre(before) increment: 
//first increase and then assign
let m = 1;
let n = ++m;
console.log(m);//2
console.log(n);//2

let u = -1000;
let v = ++u;
console.log(u);//-999
console.log(v);//-999

//3. post(later) decrement:
let w = 2;
let r = w--;
console.log(w);//1
console.log(r);//2

//4. pre(first) decrement:
let s = 2;
let c = --s;
console.log(s);//1
console.log(c);//1

let pop = 10;
console.log(++pop);
console.log(pop);

let rest = -9;
console.log(--rest);
console.log(rest);