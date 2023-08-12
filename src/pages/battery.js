class Battery {
    needs_service() {
      return false; // Placeholder logic, implement your own criteria for battery service
    }
  }
  
  class SpindlerBattery extends Battery {
    constructor(last_service_date, current_date) {
      super();
      this.last_service_date = last_service_date;
      this.current_date = current_date;
    }
  
    needs_service() {
      const timeDifference = this.current_date.getFullYear() - this.last_service_date.getFullYear();
      return timeDifference >= 2;
    }
  }
  
  class NubbinBattery extends Battery {
    constructor(last_service_date, current_date) {
      super();
      this.last_service_date = last_service_date;
      this.current_date = current_date;
    }
  
    needs_service() {
      const timeDifference = this.current_date.getFullYear() - this.last_service_date.getFullYear();
      return timeDifference >= 4;
    }
  }
  
  module.exports = {
    Battery,
    SpindlerBattery,
    NubbinBattery,
  };
  