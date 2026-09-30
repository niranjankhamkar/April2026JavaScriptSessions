//Objects in JS: non primitive 
//collection of related data (key - value)...
let user = {    //uder is Object here
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);
console.log(user.name);
console.log(user.age); //dot notation
console.log(user['name']);//bracket notation
console.log(user['city']);
console.log(user['age']);
user = null;
user = undefined;
console.log(user.name);
console.log('----------');

let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);
user.city = 'LA';
user.zip = 9090;
console.log(user);
user.phone = 90909090;
console.log(user);
delete user.age;
console.log(user);
console.log('----------');

//nested objects:
//JS Objects
let customer = {//object
    name: 'Manish',
    age: 25,
    phone: '98989898',
    salary: 12.33,
    isActive: true,
    address: {
        flat: 101,
        building: 'new building',
        city: 'Bangalore',
        zip: 10101
    }
};
console.log(customer);
console.log(customer.name);
console.log(customer.isActive);
console.log(customer.address);
console.log(customer.address.city);
console.log(customer['address'].city);
console.log(customer['address']['zip']);
console.log('----------');

//JS object
let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);
//js object ----> JSON : serialization (marshelling)
let userJson = JSON.stringify(user);
console.log(userJson);
console.log(typeof userJson);//string
//POST API: JSON
console.log('-------------');
//JSON string ----> JS Object : De-serialization (Unmarshelling)
let userObj = JSON.parse(userJson);
console.log(userObj);
console.log(typeof userObj);

console.log(user.name === userObj.name);
console.log(user === userObj); //false

//POJO --- JSON
//JSON --- POJO

let emp = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
    devices: ['airtel sim', 'iphone 17', 'connector']//array 
};

console.log(emp.devices[1]);
console.log(emp.devices.length);

let empJson = JSON.stringify(emp);
console.log(empJson);

//heap dump
//64 bit: ~2gb deafult Heap
//32 bit: 512 MB

const mem = process.memoryUsage();
console.log(mem);