
let user = {
    name: 'Tom',
    age: 20,
    salary: 12.33,
    isActive: true
}
console.log(user['name']);
//object iteration: for ... in loop:
for (let e in user) {
    console.log(user[e]);
    if (user[e] === true) {
        console.log('bye');
        break;
    }
}
console.log('-------');
console.log(Object.keys(user)); //all keys //[ 'name', 'age', 'salary', 'isActive' ]
console.log(Object.values(user)); //vall values // [ 'Tom', 20, 12.33, true ]
console.log(Object.entries(user));//all key-value pair

//JS object to JSON:
let userJson = JSON.stringify(user, null, 2);
console.log(userJson);