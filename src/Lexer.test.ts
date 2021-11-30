import Lexer from './Lexer'

test('New Lexer is the expected type', () => {
  const a = new Lexer('')
  expect(typeof a).toBe('object')
  expect(a.constructor.name).toBe('Lexer')
})

// test('Lex of "   " is an empty string', () => {
//   const a = new Lexer('   ')
//   const r = []
//   for (const t of a.lex()) {
//     r.push(t.s)
//   }
//   expect(r.join('')).toBe('')
// })

// test('Lex of "chummy 69 chum" is as expected', () => {
//   const a = new Lexer('chummy 69 chum')
//   const r = []
//   for (const t of a.lex()) {
//     r.push(t.s)
//   }
//   expect(r.join('')).toBe('chummy69chum')
// })
