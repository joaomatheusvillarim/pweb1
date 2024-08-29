const cep = "05650000";
const dono = {
  "proprietario": "Silvio Santos",
  "endereco": {
    "cep":'hacked, pay to recover',
    "logradouro": 'hacked, pay to recover',
    "complemento": 'hacked, pay to recover',
    "bairro": 'hacked, pay to recover',
    "localidade": 'hacked, pay to recover',
    "uf": '',
    "geo": {
      "lat": "-23.61919020307765",
      "lng": "-46.70793551534256"
    }
  }
}
const http = require('http');

const getEndereco = (cep, callback) => {
  const url = `http://www.viacep.com.br/ws/${cep}/json/`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = '';
    
      res.on('data', dados => {
        resultado += dados;
      })
  
      res.on('end', () => {
        console.log(resultado);
        callback(JSON.parse(resultado))
      })

    })
  })
}
const resultado = getEndereco(cep, endereco => `Endereço: ${endereco}`);
console.log(resultado);
