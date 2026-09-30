//callback hell ---> promises chain----> async await concept.....


//async-await: just a syntax on top of JS Promises to improve the callback hell and promises chain.
//to aovid the pyramid of doom...

//async with function --> It will always return a promise
//await with steps

async function print() {
    console.log('hello print');
}

print();

async function getNumber() {
    return 100;
}

getNumber().then(t1 => console.log(t1));

let t1 = await getNumber();
console.log(t1);


function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Tom', age: 30 });
        }, 2000);
    })
}

//getUser().then(user => console.log(user));

let user = await getUser();
console.log(user);


async function getTrainer() {
    return 'naveen';
}

let trName = await getTrainer();
console.log(trName);
console.log('---------------------------');

function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. machine started');
            resolve(true);
        }, 2000);
    });
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. water boiled');
            resolve();
        }, 3000);
    });
}

function addCoffeePowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. coffee powder added');
            resolve();
        }, 1500);
    });
}

function pourInCup() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. poured in the cup');
            resolve();
        }, 2000);
    });
}

function serveCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('5. coffee served');
            resolve();
        }, 3000);
    });
}

//async -- await
async function makeCoffee() {
    try {
        let flag = await startMachine();
        console.log(flag);
        await boilWater();
        await addCoffeePowder();
        await pourInCup();
        await serveCoffee();
        console.log('your coffee is ready...enjoy!!');
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('close the DB');
    }
};

await makeCoffee();

//async await ---
//1. if a function is wriiten with async -- alwys returns a promise --> call it using with await
//2. if a function is returning a Promise (resolve, reject) ---> call it using with await
//3. we should not write await without async function
//4. async func -- its not mandatory to have await step --> will alwys return promise
//5. if in a function, you have await steps --- then that function should be async


function pop() {
    console.log('hello world');
    await boilWater();
}

pop();