import userAuth from "../controller/auth.controller.js";

export default function authRoutes(fastify) {

    fastify.post('/login', async (req, replay) => {
        return await userAuth.validaLogin(req, replay)
    } )

}