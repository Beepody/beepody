# beepody

Beep melody utilities for JavaScript.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][build-image]][build-url]
[![Build Size][size-image]][size-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]
[![Language Grade][lgtm-image]][lgtm-url]
[![GPL 3.0][license-image]](LICENSE)

## Demo

[CodePen Demo](https://codepen.io/acerix/pen/MWEwBXd)

## Install

```bash
yarn add beepody
```

## Usage

### Build System

```typescript
import {Beep} from 'beepody'

// Each line is space separated: frequency (Hz), length (ms), repeats
// Default values: "440 200 1"
const beep = new Beep(`
392     250     4
466.2   250 
261.6   250 
392     250     4
349.2   250 
370     250 
392     250 
10      500
392     250 
392     500 
392     250     2
466.2   250 
261.6   250 
392     250     4
349.2   250 
370     250
392     500 
10      500
`)

beep.play()
```

### Node

```js
const {Beep} = require('beepody')
const beep = new Beep('play 600 988 1 1319 4')
beep.toBeepCommand
```

### Script Tags

```html
<script src="https://unpkg.com/beepody"></script>
<button onClick="beepody.playDefaultBeep()">beep</button>
```

### Command Line Interface

```shellscript
$ beepody "392 250 4"
(beeps?)

$ beepody
beepody> 392 250 4
(beeps?)
```

#### CLI in Browser

[RunKit](https://npm.runkit.com/beepody)

## Read the Docs

[Documentation](http://docs.beepody.com/)

## CLI Commands

*   `yarn install`: Install dependencies
*   `yarn dev`: Run tests when source files are changed
*   `yarn lint --fix`: Lint with ESLint
*   `yarn test`: Run Jest tests
*   `yarn doc`: Build documentation
*   `yarn build`: Production build
*   `yarn prepublish`: Prepare for publishing
*   `yarn publish`: Publish to npm

## Feedback

* Report bug and feature requests as [GitHub Issues](https://github.com/Beepody/beepody/issues)

## Sponsorship

* [Sponsor Beepody](https://github.com/sponsors/acerix)

[npm-image]: https://img.shields.io/npm/v/beepody.svg
[npm-url]: https://npmjs.org/package/beepody
[downloads-image]: https://img.shields.io/npm/dm/beepody.svg
[downloads-url]: https://npmjs.org/package/beepody
[build-image]: https://github.com/Beepody/beepody/workflows/Test/badge.svg
[build-url]: https://github.com/Beepody/beepody/actions?query=workflow%2ATest
[size-image]: https://badgen.net/bundlephobia/min/beepody
[size-url]: https://bundlephobia.com/result?p=beepody
[coverage-image]: https://scrutinizer-ci.com/g/Beepody/beepody/badges/coverage.png?b=main
[coverage-url]: https://scrutinizer-ci.com/g/Beepody/beepody/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/Beepody/beepody/badges/quality-score.png?b=main
[scrutinizer-url]: https://scrutinizer-ci.com/g/Beepody/beepody/?branch=main
[lgtm-image]: https://img.shields.io/lgtm/alerts/g/Beepody/beepody.svg
[lgtm-url]: https://lgtm.com/projects/g/Beepody/beepody/
[license-image]: https://img.shields.io/npm/l/beepody.svg
