const fs = require('fs')

console.log('Inicio')

fs.writeFile('Arquivo.txt', 'oi', function(err){
    setTimeout(function(){
        console.log('Arquivo criado, pronto para iniciar!')
    }, 1000)
})

console.log('Fim')