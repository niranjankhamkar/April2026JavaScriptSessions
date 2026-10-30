//two Dim: 2D array:
let num = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
//3x4
console.log(num[0][0]);
console.log(num[0][3]);
console.log(num[2][3]);
//console.log(num[3][3]);
console.log('------------');
console.log(num.length);//row count=3
console.log(num);
//print/iterate the 2D array:
let num = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
for (let i = 0; i <= num.length - 1; i++) {
    for (let j = 0; j <= num[i].length - 1; j++) {
        process.stdout.write(num[i][j] + ' ');//use for same line print 
        // console.log(num[i][j]);
    }
    console.log();//new line
}
console.log('===============');
//for .. of loop:
let num = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
for (let u of num) {    //for row
    for (let v of u) {  //for coloum
        process.stdout.write(v + ' ');
    }
    console.log();
}
//jagged array:
let data = [
    [1, 2, 3, 4, 5],
    [10, 20, 30],
    [100, 200],
    [1000]
];
console.log(data);
for (let u of data) {
    for (let v of u) {
        process.stdout.write(v + ' ');
    }
    console.log();
}
console.log('---------------');
for (let i = 0; i <= data.length - 1; i++) {
    for (let j = 0; j <= data[i].length - 1; j++) {
        process.stdout.write(data[i][j] + ' ');//1
    }
    console.log();//new line
}

let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5
//reverse order: using for .. of loop:
let count = prods.length - 1;//4
for (let e of prods) {
    e = count;
    console.log(prods[e]);//macbook air
    count--;
}
//for .. in loop:
//1d: 1 for loop
//2d: 2 for loops
//3d: 3 for loops
//nd: n for loops
console.log(typeof prods);
let numarray = [4, 6, 7, 8];
numarray[-1] = 100;
numarray[-100] = 200;
console.log(numarray);//print index value
console.log(Object.getOwnPropertyNames(numarray));//print index
console.log(numarray.length);

let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5
let count = prods.length - 1; //4
for (let x in prods) {
    x = count;
    console.log(prods[x]);
    count--;
}

let testing = [
    [
        [1, 2, 3],
        [2, 3, 4]
    ],
    [
        [1, 2, 3],
        [2, 3, 4]
    ],
    [
        [1, 2, 3],
        [2, 3, 4]
    ],
]

let prods = ["mac", "pen", "ipad"]
prods[-1] = "hi";
// console.log(prods[-1]);
// console.log(prods);
let count = prods.length - 1; //2
for (let e in prods) { 
    e = count;//-1
    console.log(prods.at(e));   // index number
    count--;
}