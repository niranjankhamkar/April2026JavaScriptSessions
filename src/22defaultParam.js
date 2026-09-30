//default param - with default value
function greet(name = 'hiwad') {
    console.log('hello ' + name);
}
greet();//hello hiwad
greet('smita');//hello smita

function openBrowser(browserName = 'chrome') {
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
};
let res = openBrowser('IE');
console.log(res);

function voting(name, age = 16) {
    console.log(name, age);
}
voting('Tom');
voting('peter', 30);

//multiple default params:
function createUser(name = 'Anonymous', role = 'viewer') {
    console.log(name, role);
}
createUser();
createUser('naveen', 'admin');

function add(a, b = 10) {
    return a + b;
}
let t1 = add(5);
console.log(t1);//15
let t2 = add(5, undefined); //undefined wil trigger the default value
console.log(t2);//15
let t3 = add(5, null); ////undefined wil not trigger the default value
console.log(t3);//5

function add(a, b = 10) {
    return a + b;
}
let r1 = add(5, NaN);
console.log(r1);

function launchBrowser(browserName) {//CHROME
    console.log('launching browser....' + browserName);
    let isLaunched = true;
    switch (browserName.trim().toLowerCase()) { //chrome
        case 'chrome':
            console.log('chrome browser is launched successfully');
            break;
        case 'edge':
            console.log('edge browser is launched successfully');
            break;
        case 'safari':
            console.log('safari browser is launched successfully');
            break;
        case 'firefox':
            console.log('firefox browser is launched successfully');
            break;
        default:
            console.log('invalid browser...', browserName);
            console.log('plz pass the valid browser name: chrome, firefox, edge, safari');
            isLaunched = false;
            break;
    }
    return isLaunched;//that why we use isLaunched at top
};
let open = launchBrowser('firefox');
console.log(open);

function print(lastname, middlename, firstname = 'sachit') {
    console.log(firstname, lastname);
}
print('sharma');
print('sharma', 'naveen');
print('niranjan', 'vitthal', 'khamkar');