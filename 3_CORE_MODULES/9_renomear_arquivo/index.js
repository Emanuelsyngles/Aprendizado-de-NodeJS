const fs = require('fs')

const arqAntigo = "arquivo.txt"
const arqNovo = "novo.txt"

fs.rename('arquivo.txt', arqNovo, function(err){

    if(err) {
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} Foi renomeado para ${arqNovo}`)

})

