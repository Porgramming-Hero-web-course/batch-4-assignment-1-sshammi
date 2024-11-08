"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            console.log(2024 - this.year);
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
}
