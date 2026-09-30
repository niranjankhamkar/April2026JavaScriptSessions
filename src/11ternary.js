
//ternary operator --> ? :
let amount = 15;
let flag = amount >= 10 ? 'naveen' : 'waseem';  //true(left) : false(right)
console.log(flag);

let element = 'link';
let action = element === 'link' ? 'click' : 'ignore';//
console.log(action);

console.log(100, 'naveen', 12.33, true, 'IBM');
console.log(100);

let name = 'poonam';
let age = 30;
let salary = 33.44;
let isActive = true;
console.log(name, age, salary, isActive);
console.log(name + age + salary + isActive);
console.log('user data ', name, age);

//nested ternary operator 
let bill = 0;
let flag = (bill >= 50) ? true : bill > 1 ? 'hi' : 'bye';// two conditions in one line. 
// condition separated by ? & : <--is used to separate true(left) and false(right) part.
// if bill is greater than or equal to 50 then flag will be true, 
// if bill is greater than 1 but less than 50 then flag will be 'hi',
// otherwise flag will be 'bye'
console.log(flag);

let age = 20;
let name = 'xyz';
console.log(age, '\n', name);
