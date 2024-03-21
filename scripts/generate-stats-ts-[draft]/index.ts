#!/usr/bin/env node

async function main() {
  // const overview = await getStats(username, accessToken)
  // await generateStats(overview)

  // const overview = await getLanguages(username, accessToken)
  // await generateLanguages(overview)
}

main().then(() => {
  console.log('done')
}).catch((err) => { 
  console.error(err)
  process.exit(1)
})