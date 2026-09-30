
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

console.log(products);

//1. index based loop:
for (let i = 0; i <= products.length - 1; i++) {
    console.log(products[i]);
    if (products[i] === 'iphone 17') {
        console.log('found the product');
        break;
    }
}
console.log('-----------');

//2. for .. of loop:
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5
for (let e of products) {
    console.log(e);
    if (e === 'iphone 17') {
        console.log('found the product');
        break;
    }
}
console.log('-----------');

//Reverse order: using normal for loop
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5
for (let i = products.length - 1; i >= 0; i--) {
    console.log(products[i]);
}

//using for ... of loop:
let num = [1, 2, 3, 4, 5]; //5; 0-4
for (let e of num) {
    console.log(e);
}

//for ... of
let empData = ['Tom', 34.44, true, 101, 'Pune'];
console.log(empData);
for (let e of empData) {
    console.log(e);
}
console.log('================');

//for ... in
let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5
for (let e in prods) {
    console.log(prods[e]);
}