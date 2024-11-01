const express = require('express')
const controllerPessoa = require('../controllers/pessoa')
const auth = require ("../middleware/auth")

// iniciaçizando as rotas do express
const routers = express.Router()


routers.post('/', controllerPessoa.CreatePessoa)

routers.get('/',auth,controllerPessoa.GetPessoas)
routers.put('/:id',auth, controllerPessoa.UpdatePessoa)
routers.delete('/:id',auth, controllerPessoa.DeletePessoa)


// criando as rotas
//routers.get('/', (req,res) => {
   // res.send({msg: 'funcionou'})
//})
//exportando a rota
module.exports= routers


//post e put tem body
// get e delete não tem