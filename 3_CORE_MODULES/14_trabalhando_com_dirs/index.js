const fs = require('fs')

if(!fs.existsSync('./minhapasta')) {
    console.log('Desculpe mais a pasta que você está tentando encontrar não existe!')
    fs.mkdirSync('minhapasta')
}else if(fs.existsSync('./minhapasta')) {
    console.log('existe!')
}