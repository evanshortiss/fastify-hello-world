'use strict'

const { from } = require('env-var')
const env = from(process.env)

module.exports = {
  PORT: env.get('PORT').default(8080).asPortNumber(),
  HOST: env.get('HOST').default('0.0.0.0').asString(),
  LOG: env.get('LOG').default('false').asBool()
}
