//Encapsulation: 
class Employee {
    name;//public
    age; //public
    #salary; //private varoable of the class

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }
    //public getter and setter methods
    setSalary(salary) {
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }
}

let emp = new Employee('Tom', 20, 12.33);
console.log(emp.name, emp.age);

let s1 = emp.getSalary();//call public method. 
//this method access the private properties of same class
console.log(s1);//12.33

emp.setSalary(23.44);//update salary

s1 = emp.getSalary();
console.log(s1);//23.44

class LoginPage {
    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    //getter:
    getUsername() {
        return this.#username;
    }
    getPassword() {
        return this.#password;
    }

    //setter: to update the credentaials
    setUsername(username) {
        this.#username = username;
    }
    setPassword(password) {
        this.#password = password;
    }
}

//POST 
let lp = new LoginPage('naveen@gmail.com', 'naveen@123');

//GET
let un = lp.getUsername();
console.log(un);

//GET
let pwd = lp.getPassword();
console.log(pwd);

//PUT
lp.setPassword('naveen@9090');
//GET
let newPwd = lp.getPassword();
console.log(newPwd);

class User {
    name;
    #age;
    #salary
    constructor(name, age, salary) {
        this.name = name;
        if (age >= 18) {
            this.#age = age;
        }
        if (salary >= 10) {
            this.#salary = salary;
        }
    }
    setAge(age) {
        if (age >= 18) {
            this.#age = age;
        }
        else {
            console.log('age must be gr than or eq to 18');
        }
    }
    getAge() {
        return this.#age;
    }

}

let obj = new User('Tom', 21, 50);
let t1 = obj.getAge();
console.log(t1);

class Browser {

    launchBrowser() {
        console.log('launching browser');
        this.#checkOSComptible();
        this.#checkRAMSize();
        this.#checkUpgrade();
        console.log('browser is launched');
    }

    #checkOSComptible() {
        console.log('checkOSComptible');
    }

    #checkRAMSize() {
        console.log('checkRAMSize');
    }

    #checkUpgrade() {
        console.log('checkUpgrade');
    }

}

//user is trying to access the browser....
let obj = new Browser();
obj.launchBrowser();