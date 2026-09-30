let u1 = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1442,
};

let u2 = {
    name: 'Manish',
    age: 35,
    city: 'Bangalore',
    zip: 1232,
};

let u3 = {
    name: 'Pooja',
    age: 32,
    city: 'Delhi',
    zip: 12122,
};
console.log(u1);//v
console.log(u2);//m
console.log(u3);//p
console.log('--------');
u1 = u2;
console.log(u1);//M
console.log(u2);//M
console.log(u3);//P
console.log('--------');
u2 = u3;
console.log(u1);//M
console.log(u2);//P
console.log(u3);//P
console.log('--------');
u3 = u1;
console.log(u1);//M
console.log(u2);//P
console.log(u3);//M
console.log('----------');

let p1 = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1442,
};
let p2 = p1;
console.log(p1);
console.log(p2);
p2.name = 'Dilip';
p2.age = 40;

console.log(p1);
console.log(p2);
console.log('----------');

let n1 = {};
console.log(n1);
p1 = n1;
console.log(p1);

//GC:
//1. null reference
//2. undefined reference
//3. no references

let x = {
    name: 'tom'
}

x = null;

let info = {
    name: 'tom'
};

let address = {
    age: '23'
};

let comp = {
    city: 'LA'
};

let userData = { ...info, ...address, ...comp };
console.log(userData);
