class Vehicle {
    constructor(make, model, year, price, vin) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.vin = vin;
      this.paint = undefined; // Default paint is undefined
    }
  
    paint(paintColor) {
      this.paint = paintColor;
    }
  
    drive() {
      console.log(`This ${this.year} ${this.make} ${this.model} drives`);
    }
  }
  
  module.exports = Vehicle;
