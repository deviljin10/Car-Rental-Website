const { CapuletEngine, SternmanEngine, WilloughbyEngine } = require('../engine');

// Test CapuletEngine
test('CapuletEngine - needs_service should return true if mileage difference is greater than or equal to 30000', () => {
  const capuletEngine = new CapuletEngine(50000, 80000);
  expect(capuletEngine.needs_service()).toBe(true);
});

test('CapuletEngine - needs_service should return false if mileage difference is less than 30000', () => {
  const capuletEngine = new CapuletEngine(50000, 60000);
  expect(capuletEngine.needs_service()).toBe(false);
});

// Test SternmanEngine
test('SternmanEngine - needs_service should return true if warning light is on', () => {
  const sternmanEngine = new SternmanEngine(true);
  expect(sternmanEngine.needs_service()).toBe(true);
});

test('SternmanEngine - needs_service should return false if warning light is off', () => {
  const sternmanEngine = new SternmanEngine(false);
  expect(sternmanEngine.needs_service()).toBe(false);
});

// Test WilloughbyEngine
test('WilloughbyEngine - needs_service should return true if mileage difference is greater than or equal to 60000', () => {
  const willoughbyEngine = new WilloughbyEngine(50000, 110000);
  expect(willoughbyEngine.needs_service()).toBe(true);
});

test('WilloughbyEngine - needs_service should return false if mileage difference is less than 60000', () => {
  const willoughbyEngine = new WilloughbyEngine(50000, 55000);
  expect(willoughbyEngine.needs_service()).toBe(false);
});
