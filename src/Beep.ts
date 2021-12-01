import {DEFAULT_LENGTH, DEFAULT_FREQUENCY} from './config'
// import * as Tone from 'tone'

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
export const playBeepSequence = (bs: BeepSequence): void => {
  console.log('beep this:', bs)
  //create a synth and connect it to the main output (your speakers)
  // const synth = new Tone.Synth().toDestination()
  //play a middle 'C' for the duration of an 8th note
  // synth.triggerAttackRelease('C4', '8n')
  // console.log(synth)
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
