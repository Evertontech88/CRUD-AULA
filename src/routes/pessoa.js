const express = require('express')
const controllerPessoa = require('../controllers/pessoa')

// iniciaçizando as rotas do express
const routers = express.Router()

routers.get('/',controllerPessoa.GetPessoas)
routers.post('/', controllerPessoa.CreatePessoa)
routers.put('/:id', controllerPessoa.UpdatePessoa)
routers.delete('/:id', controllerPessoa.DeletePessoa)


// criando as rotas
routers.get('/', (req,res) => {
    res.send({msg: 'funcionou'})
})
//exportando a rota
module.exports= routers


//post e put tem body
// get e delete não tem