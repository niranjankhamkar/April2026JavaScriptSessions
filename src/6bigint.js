console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991

console.log(9007199254740991 + 12232);

//2^53-1
//BigInt
let num = 100n;
console.log(typeof num);//bigint
console.log(num);

let n1 = BigInt(2000);
console.log(n1);
console.log(typeof n1);

//console.log(num + 10);//100n + 10
console.log(num + 10n);//100n + 10n = 110n

console.log(10n * 2n);

console.log(10n / 2n);

console.log(-10n);

console.log(90071992547409911212n + 1212121n);

console.log(+"100n" + 10n);//100 + 10n


let phone = "9876765432";
//SSN, Aadhar card, CC, Debit, FAX, 
//string

let ssn = "121212121212";
//let cc = "1213 1212 3434 5454";
let tel = "+101 (2343-2323-12)";

let cc = "1213 1212 3434 5454";
console.log(cc.length);

console.log(phone.length);
console.log(tel.length)
