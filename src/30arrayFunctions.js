
//Mutator Methods: 
//1. push: add the element to the end of the array
let num = [1, 2, 3, 4, 5];
console.log(num.length);//5
let e1 = num.push(100);
console.log(num);   //[ 1, 2, 3, 4, 5, 100 ]
console.log(e1);//6

//2. pop: remove the last element 
let num = [1, 2, 3, 4, 5];
let t1 = num.pop();
console.log(t1);//5
console.log(num);//[ 1, 2, 3, 4 ]

//3. unshift: add to the beginning of the array:
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
cart.unshift('macbook air');
console.log(cart);//[ 'macbook air', 'imac', 'samsung', 'iphone', 'macbook' ]

//4. shift: remove the 1st element
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
cart.shift();
console.log(cart);//[ 'samsung', 'iphone', 'macbook' ]



//5. splice: add, remove, replace:
//splice(startindex, deletecount from starting index, itme(s))
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
// cart.splice(0, 0, 'Naveen');//splice(startindex, deletecount from starting index, itme(s))
// console.log(cart);//[ 'Naveen', 'imac', 'samsung', 'iphone', 'macbook' ]

// cart.splice(0, 0, 'Naveen', 'Tom');//splice(startindex, deletecount from starting index, itme(s))
// console.log(cart);//[ 'Naveen', 'Tom', 'imac', 'samsung', 'iphone', 'macbook' ]

// cart.splice(0, 2, 'canon');//splice(startindex, deletecount from starting index, itme(s))
// console.log(cart);//[ 'canon', 'iphone', 'macbook' ]

// cart.splice(2, 1, 'canon');
// console.log(cart);//[ 'imac', 'samsung', 'canon', 'macbook' ]

// cart.splice(0, cart.length, 'canon');
// console.log(cart);//[ 'canon' ]

// cart.splice(cart.length - 1, 1, 'canon');
// console.log(cart);//[ 'imac', 'samsung', 'iphone', 'canon' ]

cart.splice(2, 0, 'mouse');
console.log(cart);//[ 'imac', 'samsung', 'mouse', 'iphone', 'macbook' ]


//6. slice:
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
// let newCart = cart.slice(0, 4);
// console.log(newCart);//[ 'imac', 'samsung', 'iphone', 'macbook' ]

let newCart = cart.slice(2);
console.log(newCart);//[ 'iphone', 'macbook', 'keyboard' ]

// let newCart = cart.slice(-2);
// console.log(newCart);

//7. reverse:
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
cart.reverse();
console.log(cart);//[ 'keyboard', 'macbook', 'iphone', 'samsung', 'imac' ]

//8. indexof:
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
let i = cart.indexOf('imac');//0
console.log(i);

i = cart.indexOf('naveen');
console.log(i);//-1

let cart = ['imac', 'samsung', 'iphone', 'imac', 'macbook', 'keyboard', 'imac'];
let k = cart.indexOf('imac');//1st occurrence of imac
console.log(k);//0
//2nd occurrence of imac:
let p = cart.indexOf('imac', k + 1);
console.log(p);//3
//3rd occurrence of imac:
let m = cart.indexOf('imac', p + 1);
console.log(m);//6
console.log(cart.length - 1);//6
console.log(cart.lastIndexOf('imac'));//6



//find out index of all the imac using loop:
let cart = ['imac', 'samsung', 'iphone', 'imac', 'macbook', 'keyboard', 'imac', 'tom'];
let i = 0;
while (i <= cart.length - 1) {
    console.log(i , cart[i]);
   
    let p = cart.indexOf('imac', i);
    if (p == -1) break;
    console.log('imac index is ' + p);
    i = p + 1; //here not i++ here is i value is p+1 
    // i++
}

let cart = ['imac', 'samsung', 'iphone', 'macbook'];
cart.splice(0, 3, 'canoon');
console.log(cart);

//9 includes:       //OUTPUT true or flase
let num = [1, 2, 3, 4, 5];
let res = num.includes(3);
console.log(res);

console.log(cart.includes('macbook'));

//10 join:
let arr = ['naveen', 'tom', 'pooonam'];
arr.join(' ');//'naveen tom pooonam'
let newArr = arr.join('_');//'naveen_tom_pooonam'
console.log(newArr);

//11. toString:
let arr = ['naveen', 'tom', 'pooonam'];
let str = arr.toString();
console.log(str);
console.log(typeof str);
console.log(arr);

//12.at : element at given index.. 
// it supports negative indexing as well
let num = [1, 2, 3, 4, 5];
console.log(num.at(0));//1
console.log(num.at(3));//4
console.log(num.at(-1));//5 negative index start from last of arry
console.log(num.at(-2));//4
console.log(num.at(-5));//1

//13. forEach method: it is used to iterate over the array
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard', 'tom'];
cart.forEach((e) => {
    console.log(e.toUpperCase());
});

cart.forEach((e) => {
    console.log(e.length); //length of each word in the cart array
});
cart.forEach((e, i) => {
    console.log(i + " : " + e + " <- length of this word: " + e.length); //index and element
});

let num = [1, 2, 3, 4, 5];
num.forEach(e => console.log(e * 2));
num.forEach(e => console.log(e * e)); 