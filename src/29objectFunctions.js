
//object :- we can wright properties and methods in same object aslo in JS
let emp = {     
    name: 'Shree',  //properties
    age: 30,
    salary: 12.33,
    coding() {  //method
        console.log(this.name, ' is coding');
        //console.log(name);    //direct calling not allowed
          console.log(emp.name, ' is coding');//using object name 
    },
    testing() {     //method without parameters and return type
        console.log(this.name, ' is testing');
        this.coding();  //method calling another method in same object using 'this' keyword
    },
    printData(x, y) {   //method with parameters and return type
        return x + y;
    },
    data: function () {     //function expression use ':' insted of '=' inside the object
        console.log('hello ', this.name);
    },
    reading: () => {        //arrow function
        //console.log(this.name, 'reading method.....');    //using this. Not Allowed here
        console.log(emp.name, 'reading method.....');
    }
}

    console.log(emp.name, emp.age, emp.salary); //accessing properties of object outside of
    // object using dot operator and object name.
    emp.coding();//accessing method in the object, outside of object using dot operator and object name
    emp.testing();

    let r1 = emp.printData(100, 200);
    console.log(r1);
    emp.data();
    emp.reading();

//POM
let loginPage = {
    username: '#username',
    password: '#password',
    loginBtn: '//input[@id="login"]',

    doLogin(appusername, apppassword) {

    },
    forgotPwd() {

    },
    getFooters() {

    }

};

//object destructruing: we can extract properties from object 
// and assign to variables in single line using destructuring
let user = {    //object
    name: 'Tom',
    age: 30,
    address: {
        flat: 101,
        apartment: 'new apt',
        city: 'LA',
        location: {
            lat: 12.33,
            long: 45.44
        }
    },
    coding() {  //method
        console.log(user.address.location.lat, ' is coding');
        console.log(this.address.location);
    }
};


let { name, address: { flat, location: { lat, long } } } = user;
 //object destructuring: we can extract properties from object
console.log(name, flat, lat, long);
//Remember: In object destructuring, the variable names must match the property names
