//criando a classe controller da Pessoa
const ServicePessoa = require('../services/pessoa')

class ControllerPessoa {
 //todas as funções do controller, recebem req, res


    async GetPessoas(req,res){
        //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
 try {
    const pessoas =  await ServicePessoa.GetPessoas()
    res.send({ msg: pessoas })
    

    
 } catch (error) {
    //todo cath vai ser assim
    res.status(500).send({msg: error.message})
    
 }
}
    CreatePessoa(req,res) {
              
 try {
    const name = req.body.name
    const pessoa = ServicePessoa.CreatePessoa(name)
    res.send({ msg: pessoa })
    
 } catch (error) {
    //todo cath vai ser assim
    res.status(500).send({msg: error.message})
    
    }
    }

    UpdatePessoa (req,res)    {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
    try {
        const id = req.params.id
        const name = req.body.name
        const pessoas = ServicePessoa.UpdatePessoa(id,name)
       res.send({ msg: pessoas })
       
    } catch (error) {
       //todo cath vai ser assim
       res.status(500).send({msg: error.message})
    }   

    }
    DeletePessoa (req,res)    {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
    
        try {
            const id = req.params.id
            const pessoa = ServicePessoa.DeletePessoa(id)
       res.send({ msg: pessoa })
       
    } catch (error) {
       //todo cath vai ser assim
       res.status(500).send({msg: error.message})
    }
    }
}

module.exports = new ControllerPessoa()