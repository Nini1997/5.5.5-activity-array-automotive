// Factory class definition
class Factory {
    constructor(location, owner) {
      this.location = location;
      this.owner = owner;
      this.vehicles = [];
    }
  
    // Method to create a new vehicle in the factory
    createVehicle(vehicle) {
      if (vehicle instanceof Vehicle) {
        this.vehicles.push(vehicle);
      } else {
        throw new Error("Invalid vehicle provided.");
      }
    }
  
    // Method to list all vehicles in the factory
    listVehicles() {
      return this.vehicles;
    }
  
    // Method to paint a vehicle in the factory
    paintVehicle(vin, paintColor) {
      const vehicleToPaint = this.vehicles.find((vehicle) => vehicle.vin === vin);
      if (vehicleToPaint) {
        vehicleToPaint.paint(paintColor);
      } else {
        throw new Error("Vehicle not found.");
      }
    }
  }
  
  // Export the Factory class
  module.exports = Factory;
