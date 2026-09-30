
// let i = 11;
// let j = i++ + ++i;

// console.log(i);
// console.log(j);

// console.log('--------');

// let a = 11, b = 22, c;
// c = a + b + a++ + b++ + ++a + ++b;

// console.log(a);//13
// console.log(b);//24
// console.log(c);//103


// let i = 0;
// let j = i++ - --i + ++i - i--;

// console.log(i);
// console.log(j);


let i = 1, j = 2, k = 3;
let m = i-- - j-- - k--;

console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
console.log("m=" + m);



let m = 0, n = 0;
let p = --m * --n * n-- * m--;


console.log(p);//1
console.log(m);//-2
console.log(n);//-2

let d = 1.5, D = 2.5;
console.log(d++ + ++D); //1.5 + 3.5 = 5


console.log(++true);

console.log(7n / 2n);//3n

let pop = 10n;
console.log(++pop);

let bill = 1000;
console.log(String(bill));
//number to string:
let finalBill = bill + "";
console.log(typeof finalBill);//string

let marks = "100";
//string to number:
console.log(+marks + 20);//100+20=120

let marks = 100;
//number to string
console.log("" + marks);//"100"
console.log(typeof marks);//number

let myNum = 1000n;
console.log(myNum + "" + 200);//"1000"+200=1000200

console.log(typeof myNum);


console.log(myNum + 10n);//1010n

//string + anything ===> string
//anything + stirng ===> string
//string + string ===> string
//number + number ===> number
//bigint + bigint ==> bigint
//bigint + number ==> error

//EsLint

let distance = 100000000n;//bigInt
//dribver.fe(...).sendkeys(distance+"");//100000000

console.log(typeof test);//bigint
console.log(test);//100n
//100n --> string : "100"

console.log(+"100n" + 10);//NaN + 10 = Nan

console.log(10 !== "10");
