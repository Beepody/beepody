import Tone from './Tone'

test('New Tone is the expected type', () => {
  expect(() => {
    new Tone()
  }).toThrow('AudioContext is required')
})
