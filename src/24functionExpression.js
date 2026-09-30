test('naveen'); //function hoisting: we can call a function before its declaration
//simple function
function test(name) {
    console.log(name);
}

getData('Tom'); //But we cannot call a function expression before its declaration, 
// as it is not hoisted. It will throw a ReferenceError: Cannot access 'getData' 
// before initaization    

//function expression
let getData = function gettingUserDetailsFromDashboardPage(name) {
    console.log('hello user details', name);
}
getData('tom');//calling the function using ref name(expression name)
console.log(typeof getData);//function
console.log(typeof gettingUserDetailsFromDashboardPage);//undefined

let getUserData = function getting_user_test_data_from_excel_sheet(name, age) {
    console.log(name, age);
};
getUserData('Anshu', 20);
console.log(getUserData.name);//getting_user_test_data_from_excel_sheet
console.log(getUserData.age);//undefined