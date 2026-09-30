
import appusername, * as MyUtil from './32utils.js';
import { getRandomEmail as myEmail } from './34StringUtils.js';

//call direct when in import not change the name
// console.log(MyPI);
// driving();
// doPrint();

//using rename facility in import we can call fuction & Variable
console.log(MyUtil.PI);
MyUtil.driving();
MyUtil.print();

//coading() means appusername() we change name in import statement
appusername();

//myEmail() means getRandomEmail() we change name in import statement
myEmail();

let totalBill = 1000;
export {totalBill}