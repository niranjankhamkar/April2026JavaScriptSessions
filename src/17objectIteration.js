
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
console.log(Object.keys(user)); //keys
console.log(Object.values(user)); //values
console.log(Object.entries(user));//key-value pair

//JS object to JSON:
let userJson = JSON.stringify(user, null, 2);
console.log(userJson);