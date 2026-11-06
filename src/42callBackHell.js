//callback hell - pyramid of doom.... NOT recommded to use
function startMachine(callback) {
    setTimeout(() => {
        console.log('1. Machine Started');
        callback();
    }, 2000);
}
function boilWater(callback) {
    setTimeout(() => {
        console.log('2. Water Boiled');
        callback();
    }, 3000);
}
function addCoffeePowder(callback) {
    setTimeout(() => {
        console.log('3. Coffee powder added');
        callback();
    }, 4000);
}
function pourInCup(callback) {
    setTimeout(() => {
        console.log('4. Poured in Cup');
        callback();
    }, 2000);
}
function serveCoffee(callback) {
    setTimeout(() => {
        console.log('5. Coffee is served');
        callback();
    }, 1000);
}
// startMachine(boilWater(addCoffeePowder(pourInCup(serveCoffee(() => {
//     console.log('Your coffee is ready....enjoy it...');
// })))));
//start the coffee preparation: callback chain:
//callback hell -- pyramid of doom.... NOT use, Compltely gone from market
startMachine(() => {
    boilWater(() => {
        addCoffeePowder(() => {
            pourInCup(() => {
                serveCoffee(() => {
                    console.log('Your coffee is ready....enjoy it...');
                })
            })
        })
    })
});
//Now Promises comes to in piture to improve this things like Pyramid



//give me the user infomation after 4 secs....
function getUserData(callback) {
    console.log('fetching user from server/db....');
    setTimeout(() => {
        let user = {
            id: 101,
            name: 'Vaibhav',
            email: 'vai@gmail.com',
            role: 'SDET 3',
            city: 'Delhi'
        };
        callback(user);
    }, 4000);
}
getUserData((user) => {
    console.log('user received....');
    console.log(user);
    console.log(user.id, user.name);
});

//callback with promises....