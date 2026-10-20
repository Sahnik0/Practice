// dns-check.js
const { Resolver } = require('dns').promises

const resolver = new Resolver({ timeout: 2000, tries: 1 })

async function checkDomain(domain) {
  console.time(domain)
  try {
    const records = await resolver.resolveMx(domain)
    console.log('MX records:', records)
  } catch (err) {
    console.log('Error code:', err.code)
  }
  console.timeEnd(domain)
}

async function main() {
  await checkDomain('gmail.com')
  await checkDomain('notarealdomain12345.com')
  await checkDomain('gmail.com')
}

main()