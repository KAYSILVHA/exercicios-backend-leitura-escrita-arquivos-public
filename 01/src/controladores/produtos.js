const dados = require('../bancodedados/produtos')
const {getStateFromZipcode} = require('utils-playground')

const listarTodos = (req, res)=>{
  return res.status(200).json(dados)
};

const listarProdutosId = (req, res)=>{
  const {idProduto} = req.params;

  const produto = dados.find((produto)=>{
    return produto.id === Number(idProduto)
  })

  return res.status(200).json(produto)
};


const calcularFrete = async (req, res)=>{
  const {idProduto, cep} = req.params;

  const produto = dados.find((produto)=>{
    return produto.id === Number(idProduto)
  })

  try{
  const estado = await getStateFromZipcode(cep);
  
  switch (estado) {
    case "BA":
    case "SE":
    case "AL":
    case "PE":
    case "PB":
      frete = produto.valor * 0.1;
      break;
    case "SP":
    case "RJ":
      frete = produto.valor * 0.15;
      break;
    default:
      frete = produto.valor * 0.12;
  }


  return res.status(200).json({
    produto: {
      id: produto.id,
      nome: produto.nome,
      valor: produto.valor,
    },
    estado,
    frete
  });}
  catch (erro){
    return res.status(400).json(`ERRO: ${erro.message}`);
  }
};


module.exports ={
  listarTodos,
  listarProdutosId,
  calcularFrete
}