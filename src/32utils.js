
//import { totalBill as bill } from "./33app.js"; 
import { getRandomEmail as myEmail } from './34StringUtils.js';


const PI = 3.14;

function driving() {
    console.log('driver is driving');
}

function print() {
    console.log('printing');
}

//we can have only one default function in a JS file
//will not be part of object destructuring
export default function coding() {
    console.log('coding');
}


myEmail();//may be applicable for fuction not variable
// console.log(bill);   //<== need to check this line after we import totalBill is not printed
//Now work but comment import in that file

// let username = 'naveen';
// export default username;

export { PI, driving, print };

//1. export from one file and import in another file
//2. export {a,b,c} --> import {a,b,c} from 'utils.js'
//3. can have only one default function or variable
//will not be part of object destructuring
// export default myname ---> import myname
//4. rename:
//export {a,b,c} --> import {a as myA, b as myB, c as myC}
//5. import all: import myname, * as MyApp
//6. clg, clg ---> by default imported in calling file
//7. rename the default --without as---just rename it with a new var name