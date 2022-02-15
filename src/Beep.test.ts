import Beep, {BeepSequence, parseBeepCommand, parseGRUBInitTune} from './Beep'

test('New Beep is the expected type', () => {
  const a = new Beep()
  expect(typeof a).toBe('object')
  expect(a.constructor.name).toBe('Beep')
})

test('Parse a beep command', () => {
  const a = parseBeepCommand('beep -f 392 -l 250 -r 4')
  expect(a.toString()).toBe('Beep(23 200 0)')
})

test('Format a beep command', () => {
  const bs = new BeepSequence([
    new Beep(988, 100),
    new Beep(1319, 400)
  ])
  expect(bs.toBeepCommand()).toBe('beep -f 988 -l 100 -n -f 1319 -l 400')
})

test('Parse a GRUB init tune', () => {
  const a = parseGRUBInitTune('play 600 988 1 1319 4')
  expect(a.toString()).toBe('Beep(21 200 0)')
})

test('Format a GRUB init tune', () => {
  const bs = new BeepSequence([
    new Beep(988, 100),
    new Beep(1319, 400)
  ])
  expect(bs.toGRUBInitTune()).toBe('play 988 1 1319 4')
})

test('Hash a beep sequence', () => {
  const bs = new BeepSequence([
    new Beep(988, 100),
    new Beep(1319, 400)
  ])
  expect(bs.toHash()).toBe('988^100|1319^400')
})

test('Beep sequence as string', () => {
  const bs = new BeepSequence([
    new Beep(988, 100),
    new Beep(1319, 400)
  ])
  expect(bs.toString()).toBe('BeepSequence(988^100|1319^400)')
})

test('Beep sequence length in seconds', () => {
  const bs = new BeepSequence([
    new Beep(988, 100),
    new Beep(1319, 400)
  ])
  expect(bs.lengthInSeconds()).toBe(.5)
})

test('Beep sequence as GRUB tune returns frequency like "9.87", not "9.870000000000001"', () => {
  const bs = new BeepSequence([
    new Beep(55, 987)
  ])
  expect(bs.toGRUBInitTune()).toBe('play 55 9.87')
})
