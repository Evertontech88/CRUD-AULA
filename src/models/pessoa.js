const nomes = new Array("Ana", "Sebastião")



//criando a classe 
class ModelPessoa 

{
    GetPessoas() {
        return nomes
    }
    CreatePessoa(nome) {
        return nomes.push(nome)
    }
    UpdatePessoa(id, nome) {
        return nomes[id] = nome
    }
    DeletePessoa(id, nome) {
        return nomes.splice(id, 1)
    }



}
module.exports = new ModelPessoa()