/**
 * This file is the entrypoint of browser builds; The code executes when loaded in a browser.
 */
import beepody from './beepody'
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).beepody = beepody

import Beep, {parseBeepCommand, parseGrubInitTune} from './Beep'
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).Beep = Beep;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).parseBeepCommand = parseBeepCommand;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).parseGrubInitTune = parseGrubInitTune;

// instead of casting window to any, you can extend the Window interface: https://stackoverflow.com/a/43513739/5433572
// @todo can I?
// declare global {
//   interface Window {
//     Beep: Beep
//   }
// }

// console.log(`beepody v${beepody.version}`)

export default beepody
export {Beep, parseBeepCommand, parseGrubInitTune} from './Beep'
