enum Brand {
  BWM = 'BWM',
  VOLVO = 'Volvo',
  KIA = 'Kia',
  TOYOTA = 'Toyota',
  MAZDA = 'Mazda',
}

enum Color {
  RED = 'Red',
  BLUE = 'Blue',
  GREEN = 'Green',
  YELLOW = 'Yellow',
  WHITE = 'White',
  BLACK = 'Black',
}

class Car {
  constructor(
    public carNumber: string,
    public brand: Brand,
    public model: string,
    public color: Color | string,
    public maxSpeed: number
  ) {}

  move(speed: number) {
    if (speed <= this.maxSpeed) {
      console.log('Successful move');
    } else {
      console.log(`${speed} is bigger the maximal speed - ${this.maxSpeed}!`);
    }
  }
  repaint(color: Color | string): void {
    this.color = color;
  }

  getColor(): Color | string {
    return this.color;
  }

  displayInfo(): void {
    console.log(
      `Car Number: ${this.carNumber}
Brand: ${this.brand}
Model: ${this.model}
Color: ${this.color}
Maximal Speed: ${this.maxSpeed}`
    );
  }
}

class RaceCar extends Car {
  constructor(
    public carNumber: string,
    public brand: Brand,
    public model: string,
    public color: Color | string,
    public maxSpeed: number,
    public team: string
  ) {
    super(carNumber, brand, model, color, maxSpeed);
  }

  displayInfo(): void {
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

const raceCar1 = new RaceCar(
  'DD-6666',
  Brand.VOLVO,
  'RC90',
  Color.WHITE,
  260,
  'Red Bull'
);

const raceCar2 = new RaceCar(
    'EE-5555',
    Brand.KIA,
    'Rio',
    Color.WHITE,
    310,
    'Marlboro'
  );
  

  raceCar1.displayInfo();
  raceCar2.displayInfo();