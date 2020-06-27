'use strict'

const config = require('./config')
const fastify = require('fastify')({
  logger: config.LOG
})

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify
  .get('/', schema, function (req, reply) {
    reply
      .send({ hello: 'world' })
  })

fastify.listen(config.PORT, config.HOST, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
