import Beep, {parseBeepCommand, parseGrubInitTune} from './Beep'

test('New Beep is the expected type', () => {
  const a = new Beep()
  expect(typeof a).toBe('object')
  expect(a.constructor.name).toBe('Beep')
})

test('Parse a beep command', () => {
  const a = new Beep('beep -f 392 -l 250 -r 4')
  expect(a.toString()).toBe('?')
})

test('Parse a GRUB init tune', () => {
  const a = new Beep('play 600 988 1 1319 4')
  expect(a.toString()).toBe('?')
})
