let x = 100;
let y = 200;
let a = 'selenium';
let b = 'playwright';
console.log(x + y); //300
console.log(a + b);//seleniumplaywright
console.log(x + a);//100selenium
console.log(a + y);//selenium200
console.log(x + y + a + b);//300seleniumplaywright
console.log(a + b + x + y);//seleniumplaywright100200
console.log(a + b + (x + y));//seleniumplaywright300
console.log(`${a}${b}${x + y + 80}`);
console.log(`${x}${y}`);
console.log(`${x} + ${y}`);
console.log(`${x + y + 10}`);
console.log(`${x + y}`);
console.log(x + y + a + b + x + y);//300seleniumplaywright100200
console.log(1 + "1");//11
console.log("1" + 1);//11
console.log(1 + 1);//2
console.log("1" + "1");//11
console.log(1 - "1"); //1 - 1 = 0
console.log("5" - 2); //5 - 2 = 3
console.log("10" - "4"); //10 - 4 = 6
console.log("hello" - 2); //NaN -- not a number
console.log(10 - "naveen");//NaN
console.log(10 / "2"); //10 / 2 = 5
console.log("20" / "5"); //20 / 5 = 4
console.log("20" / "testing"); //NaN
console.log(10 * "2"); //10 * 2 = 20
console.log(10 * "hello"); //NaN
//exponential **
console.log(2 ** 3);//2x2x2=8
console.log("2" ** 3);// 2 ** 3 = 8
//Unary Plus (+): converts to a number:
console.log(+"42" + 5);//42 + 5 = 47
let d = "45";
console.log(+d + 10);//55
let totalAmount = "2000";
console.log(+totalAmount + 200); //2000 + 200 = 2200
//Unary Negation (-) : 
console.log(-"42" + 100); //-42 + 100=58
console.log(-"130" - 20);//-130 - 20 = -150
let salary = "30000";
console.log(+salary + 2000);
console.log(100 - -"40");//100 - -40 => 100+40 = 140
console.log(1 + +"2");//1 + +2 = 3
console.log(+"hello" + 2);
let marks = "-100";
console.log(-marks + 20);//-(-100) + 20 => 100 + 20 = 120
let number = '100';
console.log(`${-number + 20}`);//-100 + 20 = -80