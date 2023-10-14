const {buscarEndereco} = require('utils-playground');
const fs = require('fs/promises')

const registrarEndereco = async (req, res) => {
  const { cep } = req.params;

  try {
    let enderecos = [];
    try {
      const data = await fs.readFile('enderecos.json');
      enderecos = JSON.parse(data);
    } catch (error) {
    }

    const enderecoEncontrado = enderecos.find((endereco) => endereco.cep === cep);

    if (enderecoEncontrado) {
      return res.json(enderecoEncontrado);
    } else {
      const novoEndereco = buscarEndereco(cep);

      if (novoEndereco) {
        enderecos.push(novoEndereco);

        await fs.writeFile('./src/enderecos.json', JSON.stringify(enderecos, null, 2));

        return res.json(novoEndereco);
      } else {
        return res.status(404).json({ error: 'Endereço não encontrado' });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: `${error.message}`});
  }
};


module.exports = {
  registrarEndereco
};