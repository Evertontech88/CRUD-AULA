const ModelPessoa = require('../models/pessoa')

//criando a classe 


class ServicePessoa {
    GetPessoas() {
        return ModelPessoa.GetPessoas()
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