# fth

`fetch` that just works on any modern environments

fth is a CommonJS module which exports `fetch`. It uses `node-fetch` on Node.js and native `fetch` on any other environments (e.g. browsers and Deno).

Note that this module does *not* include `fetch` polyfill/ponyfill for legacy browsers.

## Supported environments

- Node.js (via [node-fetch](https://github.com/node-fetch/node-fetch))
- Modern browsers and Deno (in particular, any environments which imprement [`fetch`](https://caniuse.com/fetch))

## Example

```js
const fetch = require('fth')
const { Response } = fetch

const main = async () => {
  const resp = await fetch('https://example.com/')

  console.log(resp instanceof Response)
  console.log(await resp.text())
}

main()
```
