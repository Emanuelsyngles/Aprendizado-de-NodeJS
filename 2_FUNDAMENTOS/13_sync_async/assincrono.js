const fs = require('fs') 

console.log('Inicio')

fs.watchFile('objeto.txt', 'Esse é o objeto iniciado', function(err){
    setTimeout(function() {
        console.log("")
    }, 1000)
})

console.log('Fim')