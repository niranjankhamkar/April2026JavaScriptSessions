let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);


//shallow copy/cloning of the object
let myUser = { ...user };//uses the spread operator (...) to create 
// a shallow copy of the user object.
console.log(myUser);
user.age = 35;
console.log('--------');
console.log(user);
console.log(myUser);
console.log('----------------');

let newUser = structuredClone(user); //creates a deep copy 
// of the user object using the built-in structuredClone() function.
//Handles nested objects and arrays correctly.
console.log(newUser);
console.log('----------------------------');

let customer = {
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
console.log('------');
let newCustomer = { ...customer };
console.log(newCustomer);
console.log('----------');
newCustomer.address.city = 'Pune';
console.log(newCustomer);
console.log('----------------');
console.log(customer);
console.log("-----------------------");

//deep copy : all levels
let customer = {
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
let newCustomer = structuredClone(customer);//creates a deep copy 
// of the user object using the built-in structuredClone() function.
//Handles nested objects and arrays correctly.
console.log(newCustomer);
newCustomer.address.city = 'Pune';
console.log(newCustomer); //Manish - Pune
console.log(customer); //Manish -- Bangalore //not change in orignal copy