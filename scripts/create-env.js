const fs = require('fs')

const content = `export default {
  clientId: '${process.env.VUE_APP_CLIENT_ID}',
  clientSecret: '${process.env.VUE_APP_CLIENT_SECRET}'
}\n`

fs.writeFileSync('env.js', content)
