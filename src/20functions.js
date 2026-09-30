// function :- a piece of code which is doing somthing/logic ... reusable code

// function And Methode
//function without class : function
//function within a class : methode

//test(); // before called fuction knowan as fuction hoisting
//=============================================================================
//1.simple function
//zero input parameter, no return
function test() {
    console.log("this is test function");
}
//call function
test(); // calling the function -- call stack
console.log("bye");

function click() {
    console.log('click on the element');
}
click();
//================================================================================
//2.Zero input but some return:
//zero input parameter; return type : number
function getNumber() {
    console.log('getting number from function');
    return 100;
}
console.log(getNumber());
let res = getNumber();
console.log(res + 100);

//name:launchBrowser, type:boolean, ip param:zero
function launchBrowser() {
    console.log('launching browser.... chrome');
    return true;
}
let isBrowserLaunched = launchBrowser();
console.log(isBrowserLaunched);

if (isBrowserLaunched) {
    console.log('enter url: www.google.com');
} else {
    console.log('failed to launch browser');
}

function getTrainerName() {
    return "Naveen";
}
let name = getTrainerName();
console.log(name);
console.log(typeof getTrainerName());

//================================================================================
//3.some input and some return
function addition(x, y) {
    console.log("Adding to number");
    let z = x + y;
    return z;
}
let result = addition(10, 20);
console.log(result);

let m2 = addition(100, 'naveen');
console.log(m2);

let m3 = addition('hello', 'naveen');
console.log(m3);
//================================================================================

function calculateBilling(foodBill, drinksBill, tax) {
    console.log('Calculating the Billing ....');
    return foodBill + drinksBill + tax;
}

let totalBill = calculateBilling(500, 200, 100);
console.log(totalBill);

totalBill = calculateBilling(500, 200, 0);
console.log(totalBill);

totalBill = calculateBilling(500, 200); //NaN
console.log(totalBill);
//=============================================================
//Write a function : AC
//launch browser
//input param: browser name valid: chrome, edge, firefox, safari
//return : true
//print browser is launched successfully
//return : true/false
//Wrong browser name : print invalid browse, return false

function launchBrowser(browserName) {//CHROME
    console.log('launching browser....' + browserName);
    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
        case 'safari':
            console.log('launch safari');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;

        default:
            console.log('invalid browser... plz pass the right browser..');
            return false;
    }
}

let isBrowserLaunched = launchBrowser('chrome');
console.log(isBrowserLaunched);

if (isBrowserLaunched) {
    console.log('enter url: www.google.com');
}
//================================================================================  

function printing() {
    console.log('printing 1');
}
function printing(name) {
    console.log('printing 2');
    console.log('bye');
}
function printing(name, age) {
    console.log('printing 3');
    console.log('bye');
}

// printing('naveen');
// printing('naveen', 25);
printing(); //always calling last or latest function
