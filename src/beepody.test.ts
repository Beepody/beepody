import beepody, {Beepody, Polyrat, floatToBeepody, parseBeepody} from './beepody'

test('Version matches semver format', () => {
  // @from https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  const serverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
  expect(beepody.version).toEqual(expect.stringMatching(serverRegex))
})

test('Evaluation of "1" is "1"', () => {
  expect(beepody.evaluate('1')).toBe('1')
})

test('Evaluation of "wtf" throws undefined error', () => {
  expect(() => {beepody.evaluate('wtf')}).toThrow('"wtf" is undefined')
})

test('New Beepody from main is the expected type', () => {
  const a = new Beepody()
  expect(typeof a).toBe('object')
  expect(a.constructor.name).toBe('Beepody')
})

test('New Polyrat from main is the expected type', () => {
  const a = new Polyrat()
  expect(typeof a).toBe('object')
  expect(a.constructor.name).toBe('Polyrat')
})

test('-420/69 converted to a float and back to a Beepody is "-140/23"', () => {
  const a = new Beepody(-420, 69)
  expect(floatToBeepody(+a).toString()).toBe('-140/23')
})

test('"420" converted to a Beepody is "420"', () => {
  const a = '420'
  expect(parseBeepody(a).toString()).toBe('420')
})