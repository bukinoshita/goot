
# goot [![Build Status](https://travis-ci.org/bukinoshita/goot.svg?branch=master)](https://travis-ci.org/bukinoshita/goot)

> Goot humazine greetings :wave:


## Install

```bash
$ yarn add goot
```


## Usage

```js
import goot from 'goot'
import spacetime from 'spacetime'

const now = spacetime().hour()

goot(now)
// => Good morning

goot(now, 'de')
// => Guten morgen
```


## API

### goot(now, language)

Returns a `string`

#### now

Type: `number`<br/>
Required

`now` should be between `0-23`.

Eg: `new Date().getHours()` (current hour)

#### language

Type: `string`<br/>
Default: `en`<br/>
Options: `en`, `pt`, `es`, `fr` and `de`

Language of the greeting to be returned


## Related

- [Behind The Product: Goot humanize greetings](https://bukinoshita.io/blog/behind-the-product-goot-humanize-greetings)


## Example
- [goot-web](https://github.com/bukinoshita/goot-web) — React example using goot
- [bu](https://github.com/bukinoshita/bu/blob/master/pages/blog/behind-the-product-goot-humanize-greetings.js#L18-L23) — Using in production on [bukinoshita.io](https://bukinoshita.io)
- [ritoplz](https://github.com/ritoplz/ritoplz/blob/master/pages/signup.js#L25-L29) — Using in production on ritoplz


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
