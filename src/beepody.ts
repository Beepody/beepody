import VERSION from './version'
// import Lexer from './Lexer'
// import Parser from './Parser'

/**
 * @class Beep melody utilities.
 * @name beepody
 */
class beepody {

  static get version(): string {
    return VERSION
  }

  // // static evaluate(expression: string): string {
  // static evaluate(): string {
  //   // const lexer = new Lexer(expression)
  //   // const parser = new Parser(lexer.lex())
  //   // return parser.toString()
  //   return '?'
  // }
}

export default beepody
// export {Beep, parseBeepCommand, parseGrubInitTune} from './Beep'
