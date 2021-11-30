import {DEFAULT_LENGTH, DEFAULT_FREQUENCY} from './config'

/**
 * @class Beep utility
 * @name Beep
 */
export class Beep {
  frequency: Number
  length: Number
  repeats: Number

  /**
   * Initialize a beep.
   */
  constructor(length: number=DEFAULT_LENGTH, frequency: number=DEFAULT_FREQUENCY, repeats: number=1) {
    this.frequency = frequency
    this.length = length
    this.repeats = repeats
  }

  /**
   * The text representation.
   */
  toString(): string {
    return `Beep(${this.frequency} ${this.length} ${this.repeats})`
  }

}

/**
 * Parse a Linux "beep" command.
 */
export const parseBeepCommand = (s: string): Beep => {
  return new Beep(s.length)
}

/**
 * Parse a Grub init tune "play" line.
 */
export const parseGrubInitTune = (s: string): Beep => {
  return new Beep(s.length)
}

export default Beep
