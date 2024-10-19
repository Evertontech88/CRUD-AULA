const express = require('express')
const routers = require("./src/routers/pessoa") 

// instaciar um expres

const app= express()

//middleware json - aceita json no body
app.use(express.json())

// Adicionar as rotas ao express
app.use(routers)
const PORT=3000
//inicializar o servidor
app.listen(PORT, ( )=> { //usando o template screnn
    console.info(`Servidor rodando a porta ${PORT}`)

  //  app.listen(3000, ( )=> {
     //   console.info("Servidor rodando a porta 3000")

})