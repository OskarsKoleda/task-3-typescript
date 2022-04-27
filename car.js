"use strict";
var Brand;
(function (Brand) {
    Brand["BWM"] = "BWM";
    Brand["VOLVO"] = "Volvo";
    Brand["KIA"] = "Kia";
    Brand["TOYOTA"] = "Toyota";
    Brand["MAZDA"] = "Mazda";
})(Brand || (Brand = {}));
var Color;
(function (Color) {
    Color["RED"] = "Red";
    Color["BLUE"] = "Blue";
    Color["GREEN"] = "Green";
    Color["YELLOW"] = "Yellow";
    Color["WHITE"] = "White";
    Color["BLACK"] = "Black";
})(Color || (Color = {}));
class Car {
    constructor(carNumber, brand, model, color, maxSpeed) {
        this.carNumber = carNumber;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    move(speed) {
        if (speed <= this.maxSpeed) {
            console.log('Successful move');
        }
        else {
            console.log(`${speed} is bigger the maximal speed - ${this.maxSpeed}!`);
        }
    }
    repaint(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    displayInfo() {
        console.log(`Car Number: ${this.carNumber}
Brand: ${this.brand}
Model: ${this.model}
Color: ${this.color}
Maximal Speed: ${this.maxSpeed}`);
    }
}
class RaceCar extends Car {
    constructor(carNumber, brand, model, color, maxSpeed, team) {
        super(carNumber, brand, model, color, maxSpeed);
        this.carNumber = carNumber;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.team = team;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Team: ${this.team}`);
    }
}
const car1 = new Car('AA-1234', Brand.MAZDA, 'RX7', Color.BLACK, 220);
const car2 = new Car('BB-9876', Brand.TOYOTA, 'Corolla', 'Pink', 145);
const car3 = new Car('CC-0000', Brand.BWM, 'RX5.5', Color.GREEN, 180);
car1.displayInfo();
car1.move(210);
car1.move(230);
console.log(car1.getColor());
car1.repaint('Crimson');
console.log(car1.getColor());
car2.displayInfo();
car3.displayInfo();
const raceCar1 = new RaceCar('DD-6666', Brand.VOLVO, 'RC90', Color.WHITE, 260, 'Red Bull');
const raceCar2 = new RaceCar('EE-5555', Brand.KIA, 'Rio', Color.WHITE, 310, 'Marlboro');
raceCar1.displayInfo();
raceCar2.displayInfo();
