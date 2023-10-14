const express = require('express');
const {listarTodos, listarProdutosId,calcularFrete } = require('../controladores/produtos')
const roteador = express();


roteador.get('/produtos', listarTodos)
roteador.get('/produtos/:idProduto', listarProdutosId)
roteador.get('/produtos/:idProduto/frete/:cep', calcularFrete)

module.exports = roteador