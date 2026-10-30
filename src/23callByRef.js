function test(name) {
    console.log(name);
}
console.log(test.name);//call by value
test('Tom');//calling a func by passing a value
test(100);

//call by reference: Object reference
let user = {    //Object
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
};
function getUserDetails(userObj) {  //Function
    console.log(userObj.name, userObj.age);
    console.log(userObj);
    userObj.name = 'Peter';
}
console.log(user.name);//Tom
getUserDetails(user);//call function by passing object ref...
console.log(user.name);//Peter




//destructuring concept: featching the exact proprties from the object 
// and using it in the function
//4 key-value pairs
let person = {      //Object
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}
function getPersonData({ name, age, salary }) { //Function with object destructuring in parameter
    console.log(name, age, salary);
}
getPersonData(person);//calling function:

function getData({ name }) {    //Function with object destructuring in parameter
    console.log(name);
}
getData(person);    //calling function:





let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}
let { name, age } = person;
console.log(name, age);//Tom 30
let { name: username, age: userage } = person; //mapping the object properties to new variable names
console.log(username, userage);