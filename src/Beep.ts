import {DEFAULT_LENGTH, DEFAULT_FREQUENCY} from './config'
import * as Tone from 'tone'

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
/* istanbul ignore next */ // Ignored from tests because AudioBuffer is not available in testing
export const playBeepSequence = (bs: BeepSequence): void => {
  if (typeof window === 'undefined') return
  const synth = new Tone.Synth({
    oscillator : {
      type : 'square'
    }
  }).toDestination()
  synth.volume.value = -6
  let time = Tone.now()
  console.log(time)
  for (const beep of bs.beeps) {
    const seconds = beep.length * .001
    console.log(beep.frequency, seconds, time)
    synth.triggerAttackRelease(beep.frequency, seconds, time)
    time += seconds
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
