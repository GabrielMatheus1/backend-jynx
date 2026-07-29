import userRepository from "../repository/users.repository.js";

import bcrypt from 'bcrypt'

const userAuth = {

    async buscaEmail(email) {
        const usuario = await userRepository.getUserByEmail(email)

        if (usuario.length > 0) {
            return usuario[0]
        } else {
            return null
        }

    },

    async validaLogin(req, replay) {
        const { email, password } = req.body

        const existeUsuario = await this.buscaEmail(email)

        if ( !existeUsuario ) {
            return 'Usuario ou senha incorreta!'
        }

        const senhaCorreta = await bcrypt.compare( String(password), existeUsuario.password )


        if ( !senhaCorreta ) {
            return 'Usuario ou senha incorreta!'
        }
        
        return {
            "Usuario": existeUsuario.name,
            "Email": existeUsuario.email,
            "ID": existeUsuario.id
        }
    }


}

export default userAuth