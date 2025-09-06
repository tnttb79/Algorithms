var Driver = /** @class */ (function () {
    /**
     *
     */
    function Driver(name) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    return Driver;
}());
var Car = /** @class */ (function () {
    function Car(driver) {
        this.driver = driver;
    }
    Car.prototype.drive = function () {
        console.log("car is driving by:" + this.driver.getName());
    };
    return Car;
}());
var driver = new Driver("Thang");
var car = new Car(driver);
car.drive();
