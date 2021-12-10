
/**
 * @class Tone player
 * @name Tone
 */
export class Tone {
  ctx: AudioContext
  gainNode: GainNode
  outNode: AudioDestinationNode
  
  /**
   * Initialize a tone beeper.
   */
  /* istanbul ignore next */
  constructor() {
    if (typeof window !== 'undefined' && typeof window.AudioContext !== 'undefined') {
      this.ctx = new window.AudioContext()
      this.gainNode = this.ctx.createGain()
      this.gainNode.gain.value = 1/8
      this.outNode = this.ctx.destination
      this.gainNode.connect(this.outNode)
    }
    else {
      throw 'AudioContext is required'
    }
  }

  /**
   * Play a beep after wait seconds, stopping after length seconds.
   */
  /* istanbul ignore next */
  beepOnBeepOff(frequency: number, length: number, wait: number): void {
    const osc = this.ctx.createOscillator()
    osc.type = 'square'
    osc.frequency.value = frequency
    osc.connect(this.gainNode)
    osc.start(wait)
    osc.stop(wait + length)
  }
  
}

export default Tone
