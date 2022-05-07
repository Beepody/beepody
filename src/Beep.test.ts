import Beep, {
  BeepSequence,
  parseBeepCommand,
  parseBeepHash,
  parseGRUBInitTune,
  playDefaultBeep,
} from './Beep'

test('New Beep is the expected type', () => {
  const a = new Beep()
  expect(typeof a).toBe('object')
  expect(a.constructor.name).toBe('Beep')
})

test('Beep 2 string', () => {
  expect(new Beep().toString()).toBe('Beep(440 200 1)')
})

test('Format a beep command', () => {
  const bs = new BeepSequence([new Beep(988, 100), new Beep(1319, 400)])
  expect(bs.toBeepCommand()).toBe('beep -f 988 -l 100 -n -f 1319 -l 400')
})

test('Parse a beep command', () => {
  const input = 'beep -f 392 -l 250 -r 4 -n -f 100 -l 100 -r 3'
  const a = parseBeepCommand(input)
  expect(a.toBeepCommand()).toBe(input)
})

test('Parse a long beep command', () => {
  const input =
    'beep --frequency 392 --length 250 --repeats 4 --new --frequency 100 --length 100 --repeats 3'
  const a = parseBeepCommand(input)
  expect(a.toBeepCommand()).toBe(
    'beep -f 392 -l 250 -r 4 -n -f 100 -l 100 -r 3',
  )
})

test('Format a GRUB init tune', () => {
  const bs = new BeepSequence([new Beep(988, 100), new Beep(1319, 400)])
  expect(bs.toGRUBInitTune()).toBe('play 600 988 1 1319 4')
})

test('Parse a GRUB init tune', () => {
  const input = 'play 600 988 1 1319 4'
  const a = parseGRUBInitTune(input)
  expect(a.toGRUBInitTune()).toBe(input)
})

test('Parse an empty GRUB init tune', () => {
  const input = 'play'
  const a = parseGRUBInitTune(input)
  expect(a.toGRUBInitTune()).toBe('play 60')
})

test('Hash a beep sequence', () => {
  const bs = new BeepSequence([new Beep(988, 100), new Beep(1319, 400)])
  expect(bs.toHash()).toBe('988^100|1319^400')
})

test('Parse a beep sequence hash', () => {
  const hash = '2^200|2^200|22^2300|3^200|3122^3300|12^300'
  const bs = parseBeepHash(hash)
  expect(bs.toHash()).toBe(hash)
})

test('Beep sequence as string', () => {
  const bs = new BeepSequence([new Beep(988, 100), new Beep(1319, 400)])
  expect(bs.toString()).toBe('BeepSequence(988^100|1319^400)')
})

test('Beep sequence length in seconds', () => {
  const bs = new BeepSequence([new Beep(988, 100), new Beep(1319, 400)])
  expect(bs.lengthInSeconds()).toBe(1)
})

test('Beep sequence as GRUB tune returns frequency like "9.87", not "9.870000000000001"', () => {
  const bs = new BeepSequence([new Beep(55, 987)])
  expect(bs.toGRUBInitTune()).toBe('play 600 55 9.87')
})

test('Play default beep', () => {
  expect(playDefaultBeep()).toBeUndefined()
})
