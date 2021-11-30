import beepody from './beepody'
import Beep, {parseBeepCommand, parseGrubInitTune} from './Beep'

module.exports = {
  beepody: beepody,
  Beep: Beep,
  parseBeepCommand: parseBeepCommand,
  parseGrubInitTune: parseGrubInitTune,
}

export default beepody
export {Beep, parseBeepCommand, parseGrubInitTune} from './Beep'
