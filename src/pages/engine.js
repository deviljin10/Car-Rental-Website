class Engine {
    needs_service() {
      return false; // Placeholder logic, implement your own criteria for engine service
    }
  }
  
  class CapuletEngine extends Engine {
    constructor(last_service_mileage, current_mileage) {
      super();
      this.last_service_mileage = last_service_mileage;
      this.current_mileage = current_mileage;
    }
  
    needs_service() {
      const mileageDifference = this.current_mileage - this.last_service_mileage;
      return mileageDifference >= 30000;
    }
  }
  
  class SternmanEngine extends Engine {
    constructor(warning_light_on) {
      super();
      this.warning_light_on = warning_light_on;
    }
  
    needs_service() {
      return this.warning_light_on;
    }
  }
  
  class WilloughbyEngine extends Engine {
    constructor(last_service_mileage, current_mileage) {
      super();
      this.last_service_mileage = last_service_mileage;
      this.current_mileage = current_mileage;
    }
  
    needs_service() {
      const mileageDifference = this.current_mileage - this.last_service_mileage;
      return mileageDifference >= 60000;
    }
  }
  
  module.exports = {
    Engine,
    CapuletEngine,
    SternmanEngine,
    WilloughbyEngine,
  };
  