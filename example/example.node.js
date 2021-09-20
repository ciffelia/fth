const fetch = require('fth')
const { Response } = fetch

const main = async () => {
  const resp = await fetch('https://example.com/')

  console.log(resp instanceof Response)
  console.log(await resp.text())
}

main()
