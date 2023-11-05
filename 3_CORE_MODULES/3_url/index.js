const url = require('url')
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log()
