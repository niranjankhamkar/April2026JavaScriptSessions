/**
 * This func is used to add two variables
 * @param {number} x 
 * @param {number} y 
 * @returns it returns addition of two numbers
 */
function addition(x, y) {
    return x + y;
}
let m1 = addition(10, 20);
console.log(m1);
let m2 = addition(10, 'naveen');
console.log(m2);
let m3 = addition('hello', 'naveen');
console.log(m3);
let t1 = addition(10, 20);
console.log(t1);
let t2 = addition('hello', 'tom');
console.log(t2);

/**
 * @param {string} browserName 
 * @returns 
 */
function launchBrowser(browserName) {//CHROME
    console.log('launching browser....' + browserName);

    switch (browserName.trim().toLowerCase()) { //chrome
        case 'chrome':
            console.log('chrome browser is launched successfully');
            return true;
        case 'edge':
            console.log('edge browser is launched successfully');
            return true;
        case 'safari':
            console.log('safari browser is launched successfully');
            return true;
        case 'firefox':
            console.log('firefox browser is launched successfully');
            return true;
        default:
            console.log('invalid browser...', browserName);
            console.log('plz pass the valid browser name: chrome, firefox, edge, safari');
            return false;
    }
}
launchBrowser('chrome');//calling the function -- call stack

//function calling in a circular way
function m1() {
    console.log('m1 function');
    m2();
}
function m2() {
    console.log('m2 function');
    m3();
}
function m3() {
    console.log('m3 function');
    m1();
}
m1();

//stack:
let x = 10;
let name = 'dinesh';

//a function is calling itself: recursive function: recursion
function login() {
    console.log('login to app');
    login();
}
login();

//function with param:
//function name: calculateBilling
//parameetrs: 2 : amount, tax
function calculateBilling(amount, tax) {
    return amount + tax;
}
let totalBill = calculateBilling(10000, 20); //calling function by passing values/arguments
//call by value
console.log(totalBill);