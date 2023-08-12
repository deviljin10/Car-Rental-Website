const express = require('express');
const app = express();

const Serviceable = require('./serviceable');
const { Engine, CapuletEngine, SternmanEngine, WilloughbyEngine } = require('./engine');
const { Battery, SpindlerBattery, NubbinBattery } = require('./battery');

app.get('/cars/:id/service', (req, res) => {
  const { id } = req.params;

  // Retrieve car information from the request params or database
  // Create the necessary instances of Engine, Battery, etc.
  const engine = new CapuletEngine(10000, 20000);
  const battery = new SpindlerBattery(new Date('2022-01-01'), new Date());

  // Create the car instance
  const car = new car(engine, battery);

  // Call the needs_service() method on the car instance
  const needsService = car.needs_service();

  // Return the result as a response
  res.json({ needsService });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
