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
  constructor(frequency: number=DEFAULT_FREQUENCY, length: number=DEFAULT_LENGTH, repeats=1) {
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
  tempo: Number

  /**
   * Initialize a beep sequence.
   */
  constructor(beeps: Beep[]) {
    this.beeps = beeps
    this.tempo = 600
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
      let s = `-f ${beep.frequency} -l ${beep.length}`
      if (beep.repeats !== 1) {
        s += ` -r ${beep.repeats}`
      }
      notes.push(s)
    }
    return `beep ${notes.join(' -n ')}`
  }

  /**
   * Return the GRUB init tune.
   */
  toGRUBInitTune(): string {
    const notes: string[] = []
    for (const beep of this.beeps) {
      notes.push(`${beep.frequency} ${beep.length/100}`)
    }
    return `play ${this.tempo} ${notes.join(' ')}`
  }

  /**
   * The text representation.
   */
  toString(): string {
    return `${this.constructor.name}(${this.toHash()})`
  }

  /**
   * The length of the playtime in seconds.
   */
  lengthInSeconds(): number {
    let s = 0
    for (const beep of this.beeps) {
      for (let r=-1; r<beep.repeats; r++) {
        s += beep.length
      }
    }
    return s * .001
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

const BEEP_OPTIONS = [
  ['f', 'frequency', 'FREQ'],
  ['l', 'length', 'LEN'],
  ['r', 'repeats', 'REPEATS'],
  ['d', 'delay', 'DELAY'],
]

const BEEP_COMMANDS = [
  ['n', 'new', 'NEW'],
]

/**
 * Parse a Linux "beep" command.
 */
export const parseBeepCommand = (s: string): BeepSequence => {
  const sequence = new BeepSequence([])
  const args = s.split(/\s+/)
  console.assert(args.shift() === 'beep')
  let beep = new Beep()
  const processOption = (name: string, value: string): void => {
    switch (name) {
      case 'frequency':
        beep.frequency = parseFloat(value)
        break
      case 'length':
        beep.length = parseFloat(value)
        break
      case 'repeats':
        beep.repeats = parseInt(value, 10)
        break
    }
  }
  const processCommand = (name: string): void => {
    switch (name) {
      case 'new':
        sequence.beeps.push(beep)
        beep = new Beep()
        break
    }
  }
  let option
  for (const arg of args) {
    if (arg[0] === '-') {
      if (arg[1] === '-') {
        // # eg: --frequency
        const name = arg.substring(2)
        for (const opt of BEEP_OPTIONS) {
          if (opt[1] === name) {
            option = opt[1]
          }
        }
        for (const opt of BEEP_COMMANDS) {
          if (opt[1] === name) {
            processCommand(opt[1])
          }
        }
      }
      else {
        // # eg: -f
        const letter = arg[1]
        for (const opt of BEEP_OPTIONS) {
          if (opt[0] === letter) {
            option = opt[1]
          }
        }
        for (const opt of BEEP_COMMANDS) {
          if (opt[0] === letter) {
            processCommand(opt[1])
          }
        }
      }
    }
    else {
      if (option) {
        processOption(option, arg)
      }
      else {
        console.error(`Undefined argument "${arg}"`)
      }
    }
  }
  sequence.beeps.push(beep)
  return sequence
}

/**
 * Parse a Grub init tune "play" line.
 */
export const parseGRUBInitTune = (s: string): BeepSequence => {
  const sequence = new BeepSequence([])
  const args = s.split(/\s+/)
  console.assert(args.shift() === 'play')
  sequence.tempo = parseFloat(args.shift()||'60')
  let pitch
  for (const arg of args) {
    if (pitch) {
      const duration = parseFloat(arg) * 100
      const beep = new Beep()
      beep.frequency = pitch
      beep.length = duration
      sequence.beeps.push(beep)
      pitch = null
    }
    else {
      pitch = parseFloat(arg)
    }
  }
  return sequence
}

export default Beep
