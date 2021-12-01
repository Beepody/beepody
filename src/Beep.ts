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
export const playBeepSequence = (bs: BeepSequence): void => {
  const out = new Tone.Oscillator(DEFAULT_FREQUENCY, 'square').toDestination()
  let t = 0
  Tone.Transport.stop() 
  for (const beep of bs.beeps) {
    Tone.Transport.scheduleOnce((time) => {
      out.frequency.value = beep.frequency
      const length = beep.length/1000
      const start = time + t
      const end = start + length
      out.start(start).stop(end)
      t += length
      console.log(out.frequency.value, length, start, end, t)
    }, '8n')
  }
  Tone.Transport.start()
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
