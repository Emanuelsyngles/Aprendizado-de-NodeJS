const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})

readline.question('Qual o seu estado favorito?', (estados) => {
    console.log(`Meu estado favorito é ${estados}`)
    readline.close()
})

