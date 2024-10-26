const ModelPessoa = require('../models/pessoa')

//criando a classe 


class ServicePessoa {
   async GetPessoas() {
        return ModelPessoa.findAll()
    }
    CreatePessoa(nome) {
        return ModelPessoa.CreatePessoa(nome)
    }
    UpdatePessoa(id, nome) {
        return ModelPessoa.UpdatePessoa(id,nome)
    }
    DeletePessoa(id, nome) {
        return ModelPessoa.DeletePessoa(id,nome)
    }



}
module.exports = new ServicePessoa()