//Inheritance -- 
//child class is able to access the parent class properties
//but parent can not access anything from the child

class Car {
    speed = 100;

    start() {
        console.log('car -- start');
    }

    stop() {
        console.log('car -- stop');
    }

    refuel() {
        console.log('car -- refuel');
    }

    #billing() {
        console.log('CAR -- billing');
    }

}

class BMW extends Car {
    speed = 200;

    //Method Overriding
    start() {
        console.log('BMW -- start');
    }

    parking() {
        console.log('BMW -- parking');
    }

    #billing() {
        console.log('BMW -- billing');
    }

    getBilling() {
        this.#billing();
    }
}

let bmw = new BMW();
console.log(bmw.speed);//200
bmw.start();//overridden    //BMW -- start
bmw.stop();//inherited  //car -- stop
bmw.refuel();//inherited    //car -- refuel
bmw.parking();//individual  //BMW -- parking
bmw.getBilling();//individual    //BMW -- billing
console.log('-------------');

let car = new Car();
console.log(car.speed);//100
car.start();//car -- start
car.stop();//car -- stop
car.refuel();//car -- refuel
console.log('-------------');





class Car {
    speed = 100;

    start() {
        console.log('car -- start');
        console.log(this.speed);//100
    }
}

class BMW extends Car {
    speed = 200;

    start() {
        console.log('BMW -- start');
    }

    dashboard() {
        this.start();//bmw start
        super.start();//car start
        console.log(this.speed);//200
        console.log(super.myspeed);//undefined
    }
}

let bmw = new BMW();
bmw.dashboard();