import {DEFAULT_FREQUENCY, DEFAULT_LENGTH} from './config'

test('Defaults are reasonable', () => {
  expect(DEFAULT_FREQUENCY).toBeTruthy()
  expect(DEFAULT_LENGTH).toBeCloseTo(DEFAULT_LENGTH)
})
