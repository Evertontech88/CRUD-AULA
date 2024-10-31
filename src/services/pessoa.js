const ModelPessoa = require('../models/pessoa')

//criando a classe 


class ServicePessoa {
   async GetPessoas() {
        return ModelPessoa.findAll()
    }

    async CreatePessoa(name, password, email) {

        if (!name){

            throw new Error("Favor preencher todos dados")
        }

        return ModelPessoa.create({name, password, email})

    }

    async UpdatePessoa(id, name, password, email) {
    if(!id){
        throw new Error("Favor informar o id")
    }
    const pessoa = await ModelPessoa.findByPk(id)
    if(!pessoa){

        throw new Error("Pessoa não encontrada")
    }
      pessoa.name = name || pessoa.name
      pessoa.password = password || pessoa.password
      pessoa.email = email || pessoa.email

      pessoa.save()
      return pessoa
      

    }

    async DeletePessoa(id) {
        const pessoa = await ModelPessoa.findByPk(id)

        if(!pessoa) {
        throw Error("Pessoa nao encontrada")
        }
        return pessoa.destroy({id})
    }



}
module.exports = new ServicePessoa()