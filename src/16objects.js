//Objects in JS: non primitive 
//collection of related data (key - value)...
let user = {    //user is Object here
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);//{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }
console.log(user.name);//Vinay
console.log(user.age); //dot notation
console.log(user['name']);//bracket notation
console.log(user['city']);//pune
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
console.log(user);//{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }
user.city = 'LA';
user.zip = 9090;
console.log(user);//{ name: 'Vinay', age: 30, city: 'LA', zip: 9090 }
user.phone = 90909090;
console.log(user);//{ name: 'Vinay', age: 30, city: 'LA', zip: 9090, phone: 90909090 }
delete user.age;
console.log(user);//{ name: 'Vinay', city: 'LA', zip: 9090, phone: 90909090 }
console.log('----------');

//nested objects:
//JS Objects
let customer = {//object
    name: 'Manish',
    age: 25,
    phone: '98989898',
    salary: 12.33,
    isActive: true,
    address: {  //nested object but use ":" sign,  not use equal sign
        flat: 101,
        building: 'new building',
        city: 'Bangalore',
        zip: 10101
    }
};
console.log(customer);
console.log(customer.name);//Manish
console.log(customer.isActive);//true
console.log(customer.address);//{ flat: 101, building: 'new building', city: 'Bangalore', zip: 10101 }
console.log(customer.address.city);//Bangalore
console.log(customer['address'].city);//Bangalore
console.log(customer['address']['zip']);//10101
console.log('----------');

//JS object
let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};

console.log(user);//{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }

//js object ----> JSON : serialization (marshelling)
let userJson = JSON.stringify(user);
console.log(userJson);//{"name":"Vinay","age":30,"city":"pune","zip":1212}
console.log(typeof userJson);//string
//POST API: JSON
console.log('-------------');

//JSON string ----> JS Object : De-serialization (Unmarshelling)
let userObj = JSON.parse(userJson);
console.log(userObj);//{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }
console.log(typeof userObj);//object

console.log(user.name === userObj.name); //true
console.log(user === userObj); //false  //false

//POJO --- JSON
//JSON --- POJO

let emp = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
    devices: ['airtel sim', 'iphone 17', 'connector']//array 
};

console.log(emp);
console.log(emp.devices[1]);
console.log(emp.devices.length);

let empJson = JSON.stringify(emp);
console.log(empJson);

//heap dump
//64 bit: ~2gb deafult Heap
//32 bit: 512 MB

const mem = process.memoryUsage();
console.log(mem);