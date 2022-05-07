#!/usr/bin/env node
const {Beep, BeepSequence} = require('./dist/index.js')

const bs = new BeepSequence([new Beep(7, 11)])

console.log(bs.toBeepCommand())

