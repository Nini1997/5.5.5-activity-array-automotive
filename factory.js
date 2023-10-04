class Factory {
    constructor() {
      this.vehicles = [];
    }
  
    createVehicle(vehicle) {
      if (vehicle instanceof Vehicle) {
        this.vehicles.push(vehicle);
      } else {
        throw new Error("Invalid vehicle provided.");
      }
    }
  
    listVehicles() {
      return this.vehicles;
    }
  
    paintVehicle(vin, paintColor) {
      const vehicleToPaint = this.vehicles.find((vehicle) => vehicle.vin === vin);
  
      if (vehicleToPaint) {
        vehicleToPaint.paint(paintColor);
      } else {
        throw new Error(`Vehicle with VIN ${vin} not found.`);
      }
    }
  }
  
  module.exports = Factory;
