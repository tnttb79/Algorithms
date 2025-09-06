class Driver {
  private name: string;
  /**
   *
   */
  constructor(name: string) {
    this.name = name;
  }
  getName = (): string => {
    return this.name;
  };
}

class Car {
  /**
   *
   */
  private driver: Driver;
  constructor(driver: Driver) {
    this.driver = driver;
  }
  drive(): void {
    console.log("car is driving by:" + this.driver.getName());
  }
}

const driver = new Driver("Thang");
const car = new Car(driver);
car.drive();
