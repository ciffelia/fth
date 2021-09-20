import fetch, { Response } from 'https://esm.sh/fth'

const resp = await fetch('https://example.com/')

console.log(resp instanceof Response)
console.log(await resp.text())
