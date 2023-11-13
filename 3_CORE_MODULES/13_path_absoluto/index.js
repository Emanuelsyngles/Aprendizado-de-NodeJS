const path = require('path')

// Path absoluto
console.log(path.resolve('teste.txt'))

//Formar o path
const midfolder = 'relatorios'
const fileName = 'Emanuel.txt'

const finalpath = path.join('/', 'arquivos', midFolder, fileName)


console.log(finalpath)



