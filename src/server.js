import Fastify from 'fastify'

import 'dotenv/config'

import cors from '@fastify/cors'


import usersRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'


const fastify = Fastify({
  logger: true
})

await fastify.register(authRoutes)
await fastify.register(usersRoutes)

await fastify.register(cors, {
  origin: '*',
  methods: '*'
})



fastify.get('/', async function handler (request, reply) {
  return 'Servidor funcionando'
})


try {
  await fastify.listen({ port: process.env.PORT, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)

  process.exit(1)
}
