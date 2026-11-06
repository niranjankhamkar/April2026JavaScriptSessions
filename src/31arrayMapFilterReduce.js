//1. map: transform every element of the given array
//returns: new array with the same length
let num = [1, 2, 3, 4, 5];
let test = num.map((e) => {
    return e * 2;
});
console.log(test);

let newNum = num.map(e => e * 2);
console.log(newNum);

let sqrt = num.map(e => e * e);
console.log(sqrt);


let empNames = ['Uday', 'nitin', 'Tom', 'naveen', 'Poonam'];
let namesUpper = empNames.map( e => e.toUpperCase());
console.log(empNames);//[ 'Uday', 'nitin', 'Tom', 'naveen', 'Poonam' ]
console.log(namesUpper);//[ 'UDAY', 'NITIN', 'TOM', 'NAVEEN', 'POONAM' ]



//2. filter:remove from the exisitng array on the basis of given condition
//return: new array with same length or legth can be decreased
let numbers = [10, 25, 30, 45, 50, 60];
//give me all the numbers which are gr than 30.
let grthan30 = numbers.filter(e => e > 30);
console.log(grthan30);
console.log(typeof grthan30);
let even = numbers.filter(e => e % 2 === 0);    //String & Number aslo check(Hard check)
console.log(even);
console.log(typeof even);
let odd = numbers.filter(e => e % 2 === 1);
console.log(odd);
console.log(typeof odd);

let empNames = ['Uday', 'nitin', 'Tom', 'naveen', 'Poonam', 'om'];
let longNames = empNames.filter(e => e.length > 3);
console.log(longNames);//[ 'Uday', 'nitin', 'naveen', 'Poonam' ]

let productData = ['apple macbook', 'apple iph', 'samsung galaxy', 'canon', 'apple air'];//5
let finalProd = productData
    .filter(e => e.startsWith('apple')) //[apple macbook', 'apple iph', 'apple air']//3
    .filter(e => e.includes('iph')) //['apple iph'] //1  --> apple iphone
    .map(e => e.replace('iph', 'iphone'));//[ 'apple iphone' ]
console.log(finalProd);
console.log(productData);

//3.reduce: combine everything into ONE value
//it will return a single value
let numData = [10, 20, 30, 40, 50];
let total = numData.reduce((sum, n) => sum = sum + n, 0);
console.log(total);
// let sum = 0;
// sum = sum + n;//0+10=10--10+20=30 --30+30=60
let productData = ['apple macbook', 'apple iph', 'samsung galaxy', 'canon'];
let finalVal = productData.reduce((result, e) => result + e + " ", "Auto ");
console.log(finalVal);
//array.reduce((accumulator, currentValue) => {      }, initialValue); //formula above