//1 to 10:
//while:
let i = 1;
while (i <= 10) {
    console.log(i);//1 2 3 4...6.7.8 9 10
    i++;//11
    //++i;
    // i = i + 1;
}

while (true) {
    console.log('welcome to NAL');
    break;
}

let j = 10;
while (j >= 1) {
    console.log(j);//10 9 8 7 6 5 4 3 2 1
    j--;//0
}

let l = 1;
while (l <= 10) {
    console.log(l);//1
    if (l === 5) {
        console.log('bye!!');
        break;
    }
    l++;
}

//for loop:
for (let m = 1; m <= 10; m++) {
    console.log(m);
}

//interview question
for (; ;) {
    console.log('welcome to Hotel Taj');
    break;
}

for (let n = 1; n <= 100; n++) {
    console.log(n);
    if (n % 5 === 0) {
        console.log('hi');
    }
}

//while vs for loop:
//while use cases: when number of iterations are not fixed
//wait for element on the page: 
//wait for page loading: 
//webtable pagination: back 1 2 3 4..7.10 next
//infinite scrolling: 
//calendar: march 2027
//carousel: 

//for loop use cases: when number of iterations are fixed
//month dropdown jan to dec: 1 to 12
//day: 1 to 31
//footer links
//array : 5 : 0 to 4


//for .. of
//for .. in 
//foreach method


console.log('hello');

process.stdout.write('hello');//this is used to print in the same line
process.stdout.write('world');


let name = 'naveen';
while (name === 'naveen') {
    console.log(name);
    break;
}

//do-while loop:
//1 to 10:
let p = 1;
do {
    console.log(p);// 1
    ++p;
    break;
}
while (p <= 10);//T

//10 to 1:

//use cases: do-while: iterations are not fixed....
//waiting for the element: is already on the page