
function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. machine started');
            resolve();
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

//this is a better version of writing the callback with promises - no callback hell...
// startMachine()
//     .then(() => boilWater())
//     .then(() => addCoffeePowder())
//     .then(() => pourInCup())
//     .then(() => serveCoffee())
//     .then(() => console.log('Your coffee is ready...enjoy!!'))
//     .catch((error) => console.log(error));

//callback hell ---> promises chain----> async await concept.....

// startMachine(() => {
//     boilWater(() => {
//         addCoffeePowder(() => {
//             pourInCup(() => {
//                 serveCoffee(() => {
//                     console.log('Your coffee is ready....enjoy it...');
//                 })
//             })
//         })
//     })
// });


async function makeCoffee() {
    await startMachine();
    await boilWater();
    await addCoffeePowder();
    await pourInCup();
    await serveCoffee();
    console.log('your coffee is ready...enjoy!!');
};
makeCoffee();//calling