const { SpindlerBattery, NubbinBattery } = require('../battery');

// Test SpindlerBattery
test('SpindlerBattery - needs_service should return true if time difference is greater than or equal to 2 years', () => {
  const lastServiceDate = new Date('2021-01-01');
  const currentYear = new Date().getFullYear();
  const currentServiceDate = new Date(`${currentYear}-01-01`);
  const spindlerBattery = new SpindlerBattery(lastServiceDate, currentServiceDate);
  expect(spindlerBattery.needs_service()).toBe(true);
});

test('SpindlerBattery - needs_service should return false if time difference is less than 2 years', () => {
  const lastServiceDate = new Date('2021-01-01');
  const currentYear = new Date().getFullYear();
  const currentServiceDate = new Date(`${currentYear}-06-01`);
  const spindlerBattery = new SpindlerBattery(lastServiceDate, currentServiceDate);
  expect(spindlerBattery.needs_service()).toBe(false);
});

// Test NubbinBattery
test('NubbinBattery - needs_service should return true if time difference is greater than or equal to 4 years', () => {
  const lastServiceDate = new Date('2019-01-01');
  const currentYear = new Date().getFullYear();
  const currentServiceDate = new Date(`${currentYear}-01-01`);
  const nubbinBattery = new NubbinBattery(lastServiceDate, currentServiceDate);
  expect(nubbinBattery.needs_service()).toBe(true);
});

test('NubbinBattery - needs_service should return false if time difference is less than 4 years', () => {
  const lastServiceDate = new Date('2019-01-01');
  const currentYear = new Date().getFullYear();
  const currentServiceDate = new Date(`${currentYear}-06-01`);
  const nubbinBattery = new NubbinBattery(lastServiceDate, currentServiceDate);
  expect(nubbinBattery.needs_service()).toBe(false);
});
