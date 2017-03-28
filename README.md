# goot
> Goot humazine greetings :wave:

[![Codeship Status for bukinoshita/goot](https://app.codeship.com/projects/cfdaafb0-cf8f-0134-bce9-3687366d48fa/status?branch=master)](https://app.codeship.com/projects/200932)
[![Build Status](https://travis-ci.org/bukinoshita/goot.svg?branch=master)](https://travis-ci.org/bukinoshita/goot)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/goot.svg)](https://www.npmjs.com/package/goot)
[![license](https://img.shields.io/github/license/bukinoshita/goot.svg)](https://raw.githubusercontent.com/bukinoshita/goot/master/LICENSE)

## Install
```
$ npm install --save goot
```

## Usage
```js
import goot from 'goot'

goot(10).then(greeting => console.log(`Good ${greeting}`))
// => Good morning

goot(10, 'de').then(greeting => console.log(`Guten ${greeting}`))
// => Guten morgen
```

## API
### goot(input, language)

#### input
Type: number<br/>
Default: new Date().getHours() // current time<br/>
Optional

input should be a number between 0-23 (hour)

#### language
Type: `string`<br/>
Default: `en`<br/>
Options: `en`, `pt`, `es`, `fr` and `de`<br/>
Optional

## Example
- [goot-web](https://github.com/bukinoshita/goot-web) — React example using goot

## License
[MIT](https://github.com/bukinoshita/goot/blob/master/LICENSE) &copy; Bu Kinoshita
