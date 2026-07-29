import userRepository from "../repository/users.repository.js"
import bcrypt from 'bcrypt'

const usersController = {

    async getUsers() {
        return await userRepository.getAllUsers()
    },

    async getUser(req, reply) {
        const { id } = req.params;

        return await userRepository.getUserById(id)
    },

    // Cria um novo usuario.
    async newUser(req, reply) {

        const { name, email, password } = req.body 

        const salt = 10

        const senhaHash = await bcrypt.hash( String(password), salt)

        return await userRepository.createNewUser(name, email, senhaHash)
    },

    // Exclui um usuario pelo id recebido na rota.
    async deleteById(req, reply) {

        const { id } = req.params

        return await userRepository.deleteUser(id)

    },

    // Altera os dados de um usuario existente.
    async alterUser(req, reply){
        const { id } = req.params

        const { name, email, password } = req.body

        const salt = 10

        const senhaHash = await bcrypt.hash( String(password), salt)

        return await userRepository.alterUserById(id, name, email, senhaHash)
    }

}


export default usersController
