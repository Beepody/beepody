/**
 * This file is the entrypoint of browser builds; The code executes when loaded in a browser.
 */
import beepody from './beepody'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).beepody = beepody

import {BeepSequence, Beep, playBeepSequence, playDefaultBeep} from './Beep'
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
// (window as any).Beep = Beep;
// // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
// (window as any).parseBeepCommand = parseBeepCommand;
// // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
// (window as any).parseGrubInitTune = parseGrubInitTune;
// // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
// (window as any).playBeepSequence = playBeepSequence;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).BeepSequence = BeepSequence;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).Beep = Beep;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).playBeepSequence = playBeepSequence;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).playDefaultBeep = playDefaultBeep // no semicolon on last

export default beepody
export {playBeepSequence, playDefaultBeep} from './Beep'
