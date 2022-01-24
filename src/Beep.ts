import {DEFAULT_LENGTH, DEFAULT_FREQUENCY, NOTE_DELIMITER, PARAMETER_DELIMITER} from './config'
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

  /**
   * Return the URL hash for the sequence.
   * Each note is "frequency (Hz), length (ms), repeats" separated by "|", with defaults (440 200 1).
   * Notes are separated by ",".
   */
  toHash(): string {
    const notes: string[] = []
    for (const beep of this.beeps) {
      notes.push(`${beep.frequency}${PARAMETER_DELIMITER}${beep.length}`)
    }
    return notes.join(NOTE_DELIMITER)
  }

  /**
   * Return the `beep` command.
   */
  toBeepCommand(): string {
    const notes: string[] = []
    for (const beep of this.beeps) {
      notes.push(`-f ${beep.frequency} -l ${beep.length}`)
    }
    return `beep ${notes.join(' -n ')}`
  }

  /**
   * Return the GRUB init tune.
   */
  toGRUBInitTune(): string {
    const notes: string[] = []
    for (const beep of this.beeps) {
      notes.push(`${beep.frequency} ${beep.length*.01}`)
    }
    return `play ${notes.join(' ')}`
  }

  /**
   * The text representation.
   */
  toString(): string {
    return `${this.constructor.name}(${this.toHash()})`
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
export const parseGRUBInitTune = (s: string): Beep => {
  return new Beep(s.length)
}

export default Beep
