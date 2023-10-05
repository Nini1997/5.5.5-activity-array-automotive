// Vehicle class definition
class Vehicle {
    constructor(make, model, year, price, vin) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.vin = vin;
      this.color = undefined; // Default color is undefined
    }
  
    // Method to paint the vehicle
    paint(paintColor) {
      this.color = paintColor;
    }
  
    // Method to drive the vehicle
    drive() {
      return `${this.year} ${this.make} ${this.model} drives`;
    }
  }
  
  // Export the Vehicle class
  module.exports = Vehicle;
  
