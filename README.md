# qfetch

`fetch` that just works on any modern environments

qfetch is a CommonJS module which exports `fetch`. It uses `node-fetch` on Node.js and native `fetch` on any other environments (e.g. browsers and Deno). This module does *not* include `fetch` polyfill for Internet Explorer.

## Supported environments

- Node.js (via [node-fetch](https://github.com/node-fetch/node-fetch))
- Modern browsers and Deno (in particular, any environments which imprement [`globalThis`](https://caniuse.com/mdn-javascript_builtins_globalthis) and [`fetch`](https://caniuse.com/fetch))

## Example

```js
const fetch = require('qfetch')
const { Response } = fetch

const main = async () => {
  const resp = await fetch('https://example.com/')

  console.log(resp instanceof Response)
  console.log(await resp.text())
}

main()
```
