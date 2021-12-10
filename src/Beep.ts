import {DEFAULT_LENGTH, DEFAULT_FREQUENCY} from './config'
import Tone from './Tone'

/**
 * @class Beep utility
 * @name Beep
 */
export class Beep {
  frequency: number
  length: number
  repeats: number

  /**
   * Initialize a beep.
   */
  constructor(frequency: number=DEFAULT_FREQUENCY, length: number=DEFAULT_LENGTH, repeats=0) {
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
 * @class Beep sequence
 * @name BeepSequence
 */
export class BeepSequence {
  beeps: Beep[]

  /**
   * Initialize a beep sequence.
   */
  constructor(beeps: Beep[]) {
    this.beeps = beeps
  }

}

/**
 * Play a beep sequence to the browser audio.
 */
/* istanbul ignore next */
export const playBeepSequence = (bs: BeepSequence): void => {
  if (typeof window === 'undefined') return
  let wait = 0
  const tone = new Tone()
  for (const beep of bs.beeps) {
    const seconds = beep.length * .001
    tone.beepOnBeepOff(beep.frequency, seconds, wait)
    wait += seconds
  }
}

/**
 * Play the default beep.
 */
export const playDefaultBeep = (): void => {
  playBeepSequence(new BeepSequence([new Beep()]))
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
