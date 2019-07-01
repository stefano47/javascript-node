const port = 3033

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos()) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.delete('/produtos', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(port, () => console.log(`Servidor executando na porta ${port}`))