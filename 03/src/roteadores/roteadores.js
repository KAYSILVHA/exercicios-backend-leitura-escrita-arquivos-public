const express = require('express');
const {registrarEndereco} = require('../controladores/enderecos')
const roteador = express();


roteador.get('/enderecos/:cep', registrarEndereco)

module.exports = roteador