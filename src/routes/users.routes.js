
import usersController from "../controller/users.controller.js"

export default function usersRoutes(fastify) {

    fastify.get('/users', async (req, reply) => {
        return await usersController.getUsers()
    })

    fastify.get('/user/:id', async (req, reply) => {
        return await usersController.getUser(req, reply)
    })

    fastify.post('/newUser', async (req, reply) => { 
        return await usersController.newUser(req, reply)
    })

    fastify.delete('/deleteUser/:id', async (req, reply) => { 
        return await usersController.deleteById(req, reply)
    })

    fastify.put('/alterUser/:id', async (req, reply) => {
        return await usersController.alterUser(req, reply)
    })

}
